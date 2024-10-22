const car = {
  make: "Ford",
  model: "Focus",
  color: "green", 
  year: 2010,
  currentSpeed: 0,
  accelerate: function() {
    this.currentSpeed += 10;
  },
  decelerate: function() {
    this.currentSpeed -= 10;
  },
  printInfo: function() {
    console.log(`Color:  ${this.color}\nMake:   ${this.make}\nModel:  ${this.model}\nSpeed:  ${this.currentSpeed}\n`);
  }
};

console.log("Original info: ");
car.printInfo();

console.log("Lets accelerate!");
car.accelerate();
car.printInfo();

console.log("A bit more speed...");
car.accelerate();
car.printInfo();

console.log("Okay, lets slow down!");
car.decelerate();
car.printInfo();
