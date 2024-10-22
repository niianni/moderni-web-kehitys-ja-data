class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
    printInfo() {
        console.log(`This car is ${this.color} ${this.make} ${this.model} from the year ${this.year}. Current speed is ${this.speed}.`);
    }
    accelerate() {
        this.speed += 10;
    }
    decelerate() {
        this.speed -=10;
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    paint(newColor) {
        this.color = newColor;
    }
}

const car1 = new Car("Ford", "Focus", 2010, "white");
const car2 = new Car("Toyota", "Corolla", 2005, "red");
const car3 = new Car("Nissan", "Primera", 1997, "yellow");

car1.printInfo();
car2.printInfo();
car3.printInfo();

car1.accelerate();
car2.paint("blue");
car3.setSpeed(120);
car1.printInfo();
car2.printInfo();
car3.printInfo();

car3.decelerate();
car3.printInfo();
