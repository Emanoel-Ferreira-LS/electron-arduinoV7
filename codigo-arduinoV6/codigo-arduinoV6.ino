int lum = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(12, OUTPUT);
}



void loop() {
  lum = analogRead(A0);
  Serial.println(lum);
  delay(500);
}
