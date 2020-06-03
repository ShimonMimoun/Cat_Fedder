const int motor =  14;      // the number of the motor pin

void setup() {
  // initialize the motor pin as an output:
  pinMode(motor, OUTPUT);

}

void slow(){
  digitalWrite(motor, HIGH);
  delay(15); // Change the numbers if you need to.
  digitalWrite(motor, LOW);
  delay(40); // Change the numbers if you need to.
  slow();
}

void medium(){
  digitalWrite(motor, HIGH);
  delay(15); // Change the numbers if you need to.
  digitalWrite(motor, LOW);
  delay(20); // Change the numbers if you need to.
  medium();
}   

void fast(){
  digitalWrite(motor, HIGH);
  delay(30); // Change the numbers if you need to.
  digitalWrite(motor, LOW);
  delay(10); // Change the numbers if you need to.
  fast();
}


void fasts(){
  digitalWrite(motor, -HIGH);
  delay(30); // Change the numbers if you need to.
  digitalWrite(motor, LOW);
  delay(10); // Change the numbers if you need to.
  fast();
}
void loop() {
 
    fasts();

}