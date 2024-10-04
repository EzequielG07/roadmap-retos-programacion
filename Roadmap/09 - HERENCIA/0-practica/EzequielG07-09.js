//inheritance - herencia

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.

//polymorphism - poliformsismo

const animals = [new Animal('Generic Animal'), new Dog('Rex')];

animals.forEach((animal) => {
    animal.speak(); // Calls the appropriate speak method
});

// Example 1: Shapes
// Consider a scenario where we have different shapes. Each shape has a method to calculate the area, but the implementation will vary based on the type of shape.

class Shape {
    area() {
        throw new Error('This method should be overridden!');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Polymorphic behavior
const shapes = [new Rectangle(5, 10), new Circle(3)];

shapes.forEach((shape) => {
    console.log(`Area: ${shape.area()}`);
});

// Revised Example with super()
// Here’s the Shapes example again, focusing on how super() is being used:

// class Shape {
//   constructor() {
//     // This could initialize common properties for all shapes if needed
//   }

//   area() {
//     throw new Error("This method should be overridden!");
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super(); // Call the parent constructor (Shape)
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super(); // Call the parent constructor (Shape)
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// // Polymorphic behavior
// const shapes = [
//   new Rectangle(5, 10),
//   new Circle(3)
// ];

// shapes.forEach(shape => {
//   console.log(`Area: ${shape.area()}`);
// });
