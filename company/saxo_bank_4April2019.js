[Good JS Questions Link](https://www.toptal.com/javascript/interview-questions)
// Inheritance example
var Person = function(name) {
    this.name = name;
}

Person.prototype.display = function() {
    console.log(`Name : ${this.name}`);
}

var Manager = function(name, age) {
    Person.call(this, name);
    this.age = age;
}
Manager.prototype = Object.create(Person.prototype);
Manager.prototype.display = function() {
    console.log(`Name : ${this.name}, Age : ${this.age}`);
}
var manager = new Manager('Ram', 10);
manager.display();

var person = new Person('Person');
person.display();

// -------------- Closure ---------------
// function multiply(num1) {
//     return (num2) => {
//         return num1 * num2;
//     }
// }
var multiply = (num1) => (num2) => num1*num2;
var multiplyByTwo = multiply(2);
var multiplyByFive = multiply(5);
console.log(multiplyByTwo(2));
console.log(multiplyByFive(5));

// ------------------ Singleton -----------------
var Singleton = (function(){
    var instance;
    var counter = 0;
    var getInstance = function () {
        if(! instance) {
            instance = this;
        }
        return instance;
    }

    var increaseCounter =  () => {
        counter++;
    }
    var getCounter =  () => {
        return counter;
    }

    return {
        getInstance,
        increaseCounter,
        getCounter
    }
})();

var s1 = Singleton.getInstance();
var s2 = Singleton.getInstance();
console.log('Singleton --------------');
console.log(s1.getCounter());
console.log(s2.getCounter());

s1.increaseCounter();

console.log(s1.getCounter());
console.log(s2.getCounter());

s2.increaseCounter();

console.log(s1.getCounter());
console.log(s2.getCounter());