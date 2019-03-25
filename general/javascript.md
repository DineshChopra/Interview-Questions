
* What are JavaScript Data Types?
```javascript
Number
String
Boolean
Object
Undefined
```
* Difference between == (double equals) and === (triple equals) ?
"==" checks only for equality in value.
"===" is a stricter equality test and returns false if either the value or the type of the two variables are different.
* What is the use of async and defer keyword in script tab. e.g. <srcipt src="..." async/defer> </script>
* What if prototype inheritance?
    Example is given below
* Difference between call, apply and bind?
    The function .call() and .apply() are very similar in their usage except a little difference. .call() is used when the number of the function's arguments are known to the programmer, as they have to be mentioned as arguments in the call statement. On the other hand, .apply() is used when the number is not known. The function .apply() expects the argument to be an array.
    The basic difference between .call() and .apply() is in the way arguments are passed to the function. Their usage can be illustrated by the given example.

    ```javascript
    var Person = function(name, age) {
        this.name = name;
        this.age = age;
    }
    var Employee = function(name, age, post) {
        Person.call(this, name, age);
        // Person.apply(this, [name, age]);
        this.post = post;
    }
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.display = function() {
        console.log(`Name: ${this.name}, Age : ${this.age}, Post : ${this.post}`);
    }

    var employee = new Employee('Ram', 20, 'Manager');
    employee.display();
    ```
    bind : When we want to execute a function with perticular scope then we will use bind
    e.g.
    ```javascript
    function greeting() {
        console.log(`Hello ${this.name}`);
    }
    var obj = {name: 'Sham'};
    var greetingRef = greeting.bind(obj);
    greetingRef();
    ```
* Difference between Object.assign and object spread.
    Object.assign can mutate existing object
    e.g.
    ```javascript
    var person = {name: 'Ram'};
    Object.assign(person, {age: 10});
    ```
    spread always creates a new object
    ```javascript
    var p = {...person, age: 10};  // p becones {name: 'Ram', age:19}
    ```
    spread operator will not mutate the existing person object.
* Unordered sub-list. 
* Difference between new Object(obj) and Object.create(obj).
* Difference between var and let.
* Difference between arrow function and normal function.
    Arrow functions don't have their own this or arguments binding. Instead, those identifiers are resolved in the lexical scope like any other variable. That means that inside an arrow function, this and arguments refer to the values of this and arguments in the environment the arrow function is defined 
    Normal functions have their own scope and their arguments


* What is spread operator and rest operator.
* What is event loop. [Youtube Link](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1358s)
* What is Event bubbling and Event capturing?.
* What is closures? How you are using it in your project?.

* What is variable hosting and function hosting?.

* Describe Array methods
    push : The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments
    pop : It removes last element of array
    shift : Its similar ot pop method, but it removes element from starting of array
    unshift : Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.
    indexOf
    splice
    slice
    sort
    map
    filter
    reduce
    find

* What is the use of type of operator?
    'Typeof' is an operator which is used to return a string description of the type of a variable.
* what is the difference between for-in and for-of loop
    The for-in loop is used to loop through the properties of an object.
    e.g.
    ```javascript
    var testObj = {name: 'Ram', age: 10};
    for(let key in testObj) {
        console.log(`${key} : ${testObj[key]}`);
    }
    // output : 
    name : Ram
    age : 10
    ```
    The for-of loop is used to loop an array
    e.g.
    ```javascript
    var testArray = [1,2,3]
    var sum = 0;
    for(let item of testArray) {
        sum += item;    // item is 1,2,3
    }
    console.log(sum);
    // output is 6
    ```

## ES6 New features

* Default parameter in ES6

    ```javascript
    function display(name = 'Ram') {
        console.log(name);
    }

    display(); // output is Ram
    display('Sham'); // output is Sham

    ```
* Template Literals in ES6
    It is used for multi line string. We can use variable value in literal string, which is called interpolation.
```javascript
    let name = 'Ram'
    let messag = `
        Hello 
        How are you?
        My name is ${name}
        `;
```

* Destructuring Assignment in ES6
```javascript
    var obj = {
        name: 'Ram',
        age: 10,
        title: 'Kumar'
    };

    const {name, age} = obj;
    // name = Ram and age = 10
    // We can change the property name as below
    const {name: firstName} = obj;
    console.log(firstName); // prints Ram

```
We can change the property name 

* Arrow Functions in ES6
* Promises in ES6
* Block-Scoped Constructs Let and Const
* Classes in ES6
* Modules in ES6
* spread and rest operator
```javascript
    // Example of spread operator
    var obj = {name: 'Ram'};
    var newObj = {...obj}; // spread operator

    // When you dont know exact number of arguments then you can use rest operator
    // Example of rest operator
    function display(...persons) {
        for(let p of persons) {
            console.log(p);
        }
    }

    display('Ram', 'Sham');
    display('Ram', 'Sham', 'Pankaj', 'Madhav');
```
* New data structures like Map and Set

For more information about ES6 new feature [click](https://webapplog.com/es6/) here

