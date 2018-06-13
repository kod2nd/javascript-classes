class Circle {
    constructor(radius) {
        this.radius = radius;

    }

    area(){
        const circleArea = Math.PI * (this.radius **2);
        return circleArea.toFixed(1)
    }

    perimeter(){
        const circlePerimeter = (2 * Math.PI * this.radius);
        return circlePerimeter.toFixed(1)
    }

}

const circle0 = new Circle()
const circle1 = new Circle(1)
const circle2 = new Circle(2)
const circle3 = new Circle(3)

console.log(circle3.area())
console.log(circle3.perimeter())
