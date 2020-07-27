#include <HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>
#include <WiFiManager.h>
#include "HX711.h"

//------------------------RFID-------------------------------------------------------------------------
#define SS_PIN 21  //--> SDA / SS is connected to pinout D2
#define RST_PIN 22  //--> RST is connected to pinout D1

MFRC522 mfrc522(SS_PIN, RST_PIN);  //--> Create MFRC522 instance.



// -----------------------------------HX711 circuit wiring---------------------------------------------------

const int LOADCELL_DOUT_PIN = 25;
const int LOADCELL_SCK_PIN = 26;
HX711 scale;


//----------------------------------------SSID and Password of your WiFi router-------------------------------------------------------------------------------------------------------------//

const char* ssid = "cat_feeder";
const char* password = "0123456789";
WiFiManager wm;
//-----------------------------------------------Global Parameter----------------------------------------------------------------------------------------------------------------------------//


int readsuccess;
byte readcard[4];
char str[32] = "";
String StrUID;
const int ledPinGreen = 17;
const int ledPinRed = 16;
//-----------------------------------------------------------------------------------------------SETUP--------------------------------------------------------------------------------------//
void setup() {
  Serial.begin(115200); //--> Initialize serial communications with the PC
  SPI.begin();      //--> Init SPI bus
  mfrc522.PCD_Init(); //--> Init MFRC522 card
  delay(500);

  
//---------------------------WIFI Setting -----------------------------------------------------------

 WiFi.mode(WIFI_STA);
  delay(1000);
  Serial.println("\n");  
  if(!wm.autoConnect(ssid, password))
    Serial.println("Error connexion!");
  else
    Serial.println("Connexion Success!");

  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());


//--------------------------------------Scale Hx711------------------------------------------------------

  Serial.println("Initializing the scale");
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
 

///---------------------------------led----------------------------------------------------------------------
pinMode (ledPinGreen, OUTPUT);
pinMode (ledPinRed, OUTPUT);

//-------------------------------------continue -------------------------------------------------------------

  Serial.println("Please tag a card or keychain to see the UID !");
  Serial.println("");
}

void loop() {

//----------------Wifi Reset------------------------------------------------------------------------------------------------------------------------------------------------------

  // //Dans cet exemple j'utilise la broche tactile D4 pour faire un reset des paramètres de connexion.
  // if(touchRead(T0) < 50)
  // {
  //   Serial.println("delete setting and restart...");
  //   wm.resetSettings();
  //   ESP.restart();
  // }

//-----------------End Wifi Reset------------------------------------------------------------------------------------------------------------------------------------------

  readsuccess = getid();
 
  if(readsuccess) {  
    HTTPClient http;    //Declare  HTTPClient
 
    String UIDresultSend, postData,weight;
    UIDresultSend = StrUID;
    
    postData = "tag=" + UIDresultSend;
    Serial.println(UIDresultSend+"\n");
//----------------------------------------------------HX7111 Loop----------------------------------------------------------------
   scale.set_scale(2280.f);// this value is obtained by calibrating the scale with known weights; see the README for details
   scale.tare();                // reset the scale to 0
   scale.power_down(); // put the ADC in sleep mode
   delay(40);
   scale.power_up();

  
  //-----------------------------------------------------------Insert log --------------------------------------------------
 
    postData=postData+"&weight="+(0.454 * scale.get_units(15), 10);
    http.begin("https://meiitarmoodin.com/cat/add.php");  //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Specify content-type header
   
    http.POST(postData);   //Send the request
    String payload = http.getString();    //Get the response payload
    Serial.println(payload);    //Print request response payload
//    
  Serial.println("Add to log Sucess");
    http.end();  //Close connection


//--------------------------------------------------------NAME OF CAT ----------------------------------
    
    http.begin("https://meiitarmoodin.com/cat/namecat.php");  //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Specify content-type header
    http.POST(postData);   //Send the request
    payload = http.getString();    //Get the response payload
  
   
  int booll=0;

  if(payload=="\"{\\\"no sucess\\\": \\\"false\\\"}\""){
    booll=1;
    Serial.println("No name");
  }else{
        Serial.print("Hey, ");    //Print request response payload
        Serial.print(payload);
  }


//---------------------------------VERIF INFORMATION-------------------------------------------------


  if (booll==0){
    http.begin("https://meiitarmoodin.com/cat/verif.php");  //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Specify content-type header
    http.POST(postData);   //Send the request
    payload = http.getString();    //Get the response payload
    http.end();  //Close connection
  }
   
  
    int numberOne = 1;
   
    if (payload.toInt() == numberOne && (booll==0) ) {
      Serial.print(", is allowed to eat");
      
       digitalWrite (ledPinGreen, HIGH);  // turn on the LED
       delay(3500); // wait for half a second or 500 milliseconds
       digitalWrite (ledPinGreen, LOW); // turn off the LED
       delay(500);  // wait for half a second or 500 milliseconds

    }else if (booll==1){
        Serial.print(", is not a part of our cat");
      digitalWrite (ledPinRed, HIGH);  // turn on the LED
       delay(3500); // wait for half a second or 500 milliseconds
       digitalWrite (ledPinRed, LOW); // turn off the LED
       delay(500);  // wait for half a second or 500 milliseconds

 }else {
  Serial.print(", is not allowed to eat");
      digitalWrite (ledPinRed, HIGH);  // turn on the LED
       delay(3500); // wait for half a second or 500 milliseconds
       digitalWrite (ledPinRed, LOW); // turn off the LED
       delay(500);  // wait for half a second or 500 milliseconds
  
 }



    delay(500);
 
}
}



//----------------------------------------Procedure for reading and obtaining a UID from a card or keychain---------------------------------------------------------------------------------//
int getid() {  
  if(!mfrc522.PICC_IsNewCardPresent()) {
    return 0;
  }
  if(!mfrc522.PICC_ReadCardSerial()) {
    return 0;
  }
 
  
  Serial.print("\nTHE UID CARD IS : ");
  
  for(int i=0;i<6;i++){
    readcard[i]=mfrc522.uid.uidByte[i]; //storing the UID of the tag in readcard
    array_to_string(readcard, 4, str);
    StrUID = str;
  }
  mfrc522.PICC_HaltA();
  return 1;
}


//----------------------------------------Procedure to change the result of reading an array UID into a string------------------------------------------------------------------------------//
void array_to_string(byte array[], unsigned int len, char buffer[]) {
    for (unsigned int i = 0; i < len; i++)
    {
        byte nib1 = (array[i] >> 4) & 0x0F;
        byte nib2 = (array[i] >> 0) & 0x0F;
        buffer[i*2+0] = nib1  < 0xA ? '0' + nib1  : 'A' + nib1  - 0xA;
        buffer[i*2+1] = nib2  < 0xA ? '0' + nib2  : 'A' + nib2  - 0xA;
    }
    buffer[len*2] = '\0';
}