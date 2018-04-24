class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age; 
        this.height = height;
    }

    static sayHello(name) {
        console.log(`Hello ${name} how are you?`);
    }

    // sayHello(name) {
    //     console.log(`Hello ${name} how are you?`);
    // }    
}
console.log(Person)
Person.sayHello('Leonan')


let leonan = new Person('Luiz', 32, 1.78);
console.log(leonan);
// leonan.sayHello('Leonan')
// leonan.name = 'Luiz';
// leonan.age = 32;
// leonan.height = 1.78;
// console.log(leonan)
// leonan.sayHello(leonan.name)

// const Person = class {

// }