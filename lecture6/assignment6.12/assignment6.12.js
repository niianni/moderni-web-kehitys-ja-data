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

class SpacePoint extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    moveForward(distance) {
        this.z += distance;
    }
    moveBack(distance) {
        this.z -= distance;
    }
}
/*
const testSpacePoint = new SpacePoint(0, 0, 0);

console.log(testSpacePoint);

testSpacePoint.moveBack(2);
console.log(testSpacePoint);

testSpacePoint.moveForward(3);
console.log(testSpacePoint);

testSpacePoint.moveNorth(1);
console.log(testSpacePoint);
*/
