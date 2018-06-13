class Rectangle {
    constructor(breadth, length){
        this.breath = breadth;
        this.length = length
    }
    area(){
        return this.length * this.breath
    }
    perimeter(){
        return 2 * this.length + 2 * this.breath
    }
}

const rec0 = new Rectangle()
const rec1 = new Rectangle(2,4);
const rec2 = new Rectangle(5,10)

console.log(rec0.area())
console.log(rec1.area())
console.log(rec2.area())

console.log(rec0.perimeter())
console.log(rec1.perimeter())
console.log(rec2.perimeter())
