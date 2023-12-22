#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3);
byte code;
int s;
double codes[] = {261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 446.16, 493.88};
                //  도      도#     레      레#     미     파      파#       솔     솔#      라    라#      시

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  bt.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(bt.available() > 0){
    code = int(bt.read());
    Serial.print(code);

    tone(s, codes[code], 1000);
  }
  
}
