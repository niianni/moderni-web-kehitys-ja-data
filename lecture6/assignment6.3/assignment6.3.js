const car = {
  make: "Ford",
  model: "Focus",
  color: "green", 
  year: 2010,
  currentSpeed: 120,
  accelerate: function() {
    this.currentSpeed += 10;
  },
  decelerate: function() {
    this.currentSpeed -= 10;
  },
  printInfo: function() {
    console.log(`Color:  ${this.color}\nMake:   ${this.make}\nModel:  ${this.model}\nSpeed:  ${this.currentSpeed}\n`);
  },
  paint: function(newColor) {
    this.color = newColor;
  },
  setSpeed: function(newSpeed) {
    this.currentSpeed = newSpeed;
  }
};

console.log("The original info is: ");
car.printInfo();

console.log("Your car goes to the painter...");
car.paint("red");
car.printInfo();

console.log("You did not like the new color. Lets paint the car again.");
car.paint("black");
car.printInfo();

console.log("Police comes and sets your speed to 100");
car.setSpeed(100);
car.printInfo();
