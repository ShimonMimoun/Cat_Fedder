#include <HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>
#include <WiFiManager.h>

#define SS_PIN 5  //--> SDA / SS is connected to pinout D2
#define RST_PIN 22  //--> RST is connected to pinout D1

MFRC522 mfrc522(SS_PIN, RST_PIN);  //--> Create MFRC522 instance.



//----------------------------------------SSID and Password of your WiFi router-------------------------------------------------------------------------------------------------------------//

WiFiManager wm;
const char* ssid = "cat_feeder";
const char* password = "0123456789";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


int readsuccess;
byte readcard[4];
char str[32] = "";
String StrUID;

//-----------------------------------------------------------------------------------------------SETUP--------------------------------------------------------------------------------------//
void setup() {
  Serial.begin(115200); //--> Initialize serial communications with the PC
  SPI.begin();      //--> Init SPI bus
  mfrc522.PCD_Init(); //--> Init MFRC522 card

  delay(500);

  
//---------------------------WIFI Setting -----------------------------------------------------------

 WiFi.mode(WIFI_STA);
  
  Serial.begin(115200);
  delay(1000);
  Serial.println("\n");
  
  if(!wm.autoConnect(ssid, password))
    Serial.println("Error connexion!");
  else
    Serial.println("Connexion Success!");



    //-----------------------------End Wifi




  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  Serial.println("Please tag a card or keychain to see the UID !");
  Serial.println("");
}

void loop() {

//----------------Wifi Reset------------------------------------------------------------------------------------------------------------------------------------------------------

  //Dans cet exemple j'utilise la broche tactile D4 pour faire un reset des paramètres de connexion.
  if(touchRead(T0) < 50)
  {
   
    Serial.println("Suppression des reglages et redemarrage...");
    wm.resetSettings();
    ESP.restart();
  }



//-----------------End Wifi Reset------------------------------------------------------------------------------------------------------------------------------------------

  readsuccess = getid();
 
  if(readsuccess) {  
    HTTPClient http;    //Declare  HTTPClient
 
    String UIDresultSend, postData;
    UIDresultSend = StrUID;
    
    postData = "tag=" + UIDresultSend;
    Serial.println(UIDresultSend+"\n");
  
  //-----------------------------------------------------------Insert log --------------------------------------------------
 
 
    http.begin("https://meiitarmoodin.com/cat/add.php");  //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Specify content-type header
   
    //int httpCode = http.POST(postData);   //Send the request
    http.POST(postData);   //Send the request
    String payload = http.getString();    //Get the response payload
    Serial.println(payload);    //Print request response payload
    
    http.end();  //Close connection


//--------------------------------------------------------NAME OF CAT ----------------------------------
    
    http.begin("https://meiitarmoodin.com/cat/namecat.php");  //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Specify content-type header
    http.POST(postData);   //Send the request
    payload = http.getString();    //Get the response payload
  
    Serial.println(" ");    //Print request response payload



//---------------------------------VERIF INFORMATION-------------------------------------------------
  
    http.begin("https://meiitarmoodin.com/cat/verif.php");  //Specify request destination
    http.addHeader("Content-Type", "application/x-www-form-urlencoded"); //Specify content-type header
    http.POST(postData);   //Send the request
    payload = http.getString();    //Get the response payload
  
    http.end();  //Close connection
    int numberOne = 1;
    if (payload.toInt() == numberOne) {
      Serial.print("Le chat est autoriser a manger");
    
    }else{
  Serial.print("Le chat n'est pas autoriser a manger");
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
 
  
  Serial.print("\n THE UID CARD IS : ");
  
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
