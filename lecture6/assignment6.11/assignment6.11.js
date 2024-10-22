class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moveNorth(distance) {
        this.y += distance;
    }
    moveEast(distance) {
        this.x += distance;
    }
    moveSouth(distance) {
        this.y -= distance;
    }
    moveWest(distance) {
        this.x -= distance;
    }
}
/*
const testPoint = new Point(0,0);

console.log(testPoint);
testPoint.moveNorth(3);
console.log(testPoint);

testPoint.moveEast(1);
console.log(testPoint);

testPoint.moveSouth(2);
console.log(testPoint);

testPoint.moveWest(1);
console.log(testPoint);
*/