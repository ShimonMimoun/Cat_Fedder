
# Project Cat_Fedder



<p align="center">
  <img src="https://github.com/ShimonMimoun/Cat_Fedder/blob/master/Requirements%20Specification/PosterCatFeeder.jpg">
</p>


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

# Web-Site Software

## Localisation 

    $ cd Software 

## Setup

Manually clone the repo and then run `npm install`.
To run it you need to run `npm start` for the client part and for the server part.
## Landing Page

![landingPage](https://user-images.githubusercontent.com/44939883/88576264-d56d7100-d04d-11ea-9b96-4d413e737def.JPG)

![landingPage1](https://user-images.githubusercontent.com/44939883/88577179-44979500-d04f-11ea-9b41-0649ae6d8c62.JPG)

![landingPage3](https://user-images.githubusercontent.com/44939883/88577825-4a41aa80-d050-11ea-91c5-5a55c990d35d.JPG)

## Register Page

![register](https://user-images.githubusercontent.com/44939883/88578009-8aa12880-d050-11ea-9891-e1f33e40ac7b.JPG)


## SignIn Page

![signIn](https://user-images.githubusercontent.com/44939883/88578021-8d038280-d050-11ea-9062-0da28721757d.JPG)

## Home Page

 ***Feture In Home page :***
 - Giving permission or not giving permission for a cat to eat . 
 - Add new cat. 
 - Deleting exsisting cat. 
 - Link to "About the cat page"
 

![homePage](https://user-images.githubusercontent.com/44939883/88581841-6c3e2b80-d056-11ea-91cc-768994827a2e.JPG)
## AboutCat Page
 ***In this page  you can see:***
 - Up-to-date cat weight.
 - The last time the cat ate. 
 - Cat age. 
 
![AboutCat](https://user-images.githubusercontent.com/44939883/88582821-f89d1e00-d057-11ea-9ee8-34c4d9b0802c.JPG)


## Login Page
***In this page  you can see:*** <br/><br/>
Table with all the uses of the cat in the feeding system with details like: weight, time, name of cat etc.<br/><br/>
![LoginTable](https://user-images.githubusercontent.com/44939883/88583469-fa1b1600-d058-11ea-8179-f6d6d42e8eb1.JPG)



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

# Code (C++) use Arduino

Change with Value of ***connect Rfid in Esp32:***

    #define SS_PIN 21  //--> SDA / SS is connected to pinout D2
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

- auth
- cat
- log
- users


# Documentation 



[Vision Document](https://github.com/ShimonMimoun/Cat_Fedder/blob/master/Requirements%20Specification/Vision.pdf)

[Software Design Document](https://github.com/ShimonMimoun/Cat_Fedder/blob/master/Requirements%20Specification/SDD.pdf)

[Software Requirements Document](https://github.com/ShimonMimoun/Cat_Fedder/blob/master/Requirements%20Specification/SRS.pdf)

[Presentation Project](https://github.com/ShimonMimoun/Cat_Fedder/raw/master/Requirements%20Specification/%D7%9E%D7%A6%D7%92%D7%AA%20%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%20%D7%92%D7%9E%D7%A8.pptx)

<!-- # Author

[Shimon Mimoun](https://www.linkedin.com/in/shimonmimoun/)  -->

