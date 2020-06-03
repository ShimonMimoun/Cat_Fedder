
# Project Cat_Fedder


***The target customer of the project:***
 People who raise cats in their homes. 
 
 ***Description of the project***: 
 It is a general system made up of hardware and software, designed to feed cats according to a unique chip assigned to each cat and bowl. We can keep track of the cat's eating times, the frequency of eating and the amount of food the cat eats, thus learning about the cat's behavioral patterns. In addition, the system will be able to weigh the cat and by the weight to know what the cat's health is.
 Main features: 
 - Feeding a specific cat that has bowl privileges. 
 - Learning about cat behavior patterns. 
 - Weighing the cat and drawing conclusions about its health. 
 - "Nice to have" features: Weigh the food and bring the cat the exact amount.
 



# Explain
We will install a sensor on the cat collar, when the cat approaches the bowl, the bowl sensor will detect him and if the sensors are matched the system will open the bowl opening. While the cat is eating it will stand on the weight and it will weigh him. When the bowl open, the system will send the data to the database and update the application.
Behind the scenes we will run an algorithm that will learn about the cat's behavior (amount of eating, eating times and weight) and alert the user when something unusual happens.

There are several possible events for the product
- The cat eating event: As the cat approaches the bowl, the bowl sensor detects the collar sensor and checks if its ID is appropriate and can be approved to eat. 

	(1) If the cat is allowed to eat: The bowl opening will open and the cat will be able to 				eat the food from bowl. 
	
	(2) If the cat is not allowed to eat: The bowl opening will not open and a red light will light up. 


- The cat weighing event: As the cat approaches the bowl, the bowl sensor detects the collar sensor and checks if its ID is appropriate and can be approved for weighing.

	 (1) If the cat has received permission: The system will weight the cat and send the data to the database.

	 (2) If the cat has not received permission: The system will not weigh the cat and a red light would light. 

The food weighing event: When the cat gets permission and the bowl opening is opened, we will weight the food in the bowl. As the cat leaves the area and the opening closed, we will weigh the food in the bowl, and so we can know the amount of food the cat ate.

We will use the Cloud, where we will save the information we want to display on the WEB, run the algorithm and perform the deep learning. In the Cloud we will save the data of the Database and with this we will make the connection between the hardware and the software



# Hardware

(1) ESP 32
 
![Esp32](https://cdn.instructables.com/F1F/OE4A/JF2SVQRY/F1FOE4AJF2SVQRY.LARGE.jpg?auto=webp&frame=1&width=1024&fit=bounds)

(2) RFID 

![RFID](https://cdn.instructables.com/FBJ/E13M/JF2SVSY8/FBJE13MJF2SVSY8.LARGE.jpg?auto=webp&frame=1&fit=bounds)




(4) Diode LED 

![LED Diode](https://5.imimg.com/data5/DN/SE/MY-3299289/5mm-led-light-emitting-diode-500x500.jpg)

(5) HX711 AD (weight sensor) 

![HX711 AD](https://www.nyerekatech.com/wp-content/uploads/2019/10/Weight-Sensor-10-kg.jpg)



(6) CD-ROM Component

![CDROM OPEN/CLOSE](https://goughlui.com/wp-content/uploads/2017/12/2017120310001214.jpg)

# Software 

Change with Value of ***connect Rfid in Esp32:***

    #define SS_PIN 5  //--> SDA / SS is connected to pinout D2
    #define RST_PIN 22  //--> RST is connected to pinout D1


Enter a ssid and password of ***Access Point*** to configure a Wifi Connexion 

    WiFiManager wm;
    const  char* ssid =  "Enter Ssid";
    const  char* password =  "Enter Password";
    
Hx711 connect use: 

    26 for SCK
    25 for DOUT
    Ground connects to GND
    VCC connects to 5v or 3v
    


# Database

Use Mysql and php to control the esp32 is to give the necessary authorization.
Table:




<!-- # Author

[Shimon Mimoun](https://www.linkedin.com/in/shimonmimoun/)  -->

