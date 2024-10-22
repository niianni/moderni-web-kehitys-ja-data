
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

class Firetruck extends Car {
    constructor(make, model, year, color) {
        super(make, model, year, color);
        this.lightsFlashing = false;
    }
    honk() {
        console.log("Honk!");
    }
    toggleLights() {
        this.lightsFlashing = !this.lightsFlashing;
    }
    printInfo() {
        if (this.lightsFlashing) {
            console.log(`This truck is ${this.color} ${this.make} ${this.model} from the year ${this.year}. Current speed is ${this.speed} and lights are on.`);
        } else {
            console.log(`This truck is ${this.color} ${this.make} ${this.model} from the year ${this.year}. Current speed is ${this.speed} and lights are off.`);
        }
    }
}

const truck = new Firetruck("Volvo", "Supertruck 500X", 2000, "grey");
truck.printInfo();
truck.honk();

truck.toggleLights();
truck.printInfo();

truck.toggleLights();
truck.printInfo();

