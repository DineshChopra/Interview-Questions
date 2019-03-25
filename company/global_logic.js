// Question  ---- 1
/*
// What will the following code return
f = g = 0;
var out = (function(){
    try{
        f = function() {
            return f();
        };
        f();
    }catch(e){
        return g++ && f();
    } finally {
        return ++g;
    }
    function f() {
        g += 5; return 0;
    }
})();
console.log(out);
// options: 8 7 3 2
// output: 2
*/

// Question  ---- 2
/*
// What will be the output of the following code
var foo = {
    bar: function() {return this.baz;},
    baz: 1
}
var obj = (function(){
    // console.log(typeof arguments[0]());
    console.log(typeof arguments[0]());
})(foo.bar);
// options: 1, number, error, undefined
// output: undefined
*/

// Question  ---- 3
/*
// What will be the output of the following code
var a = {};
(function(a){
    a.a = 10;
    a = null;
})(a);
console.log(a);
// options: null, 0, {a:10}, {a: undefined}
// output : {a:10}
*/

// Question  ---- 4
/*
What method return a promise that resolves or rejects as soon as one of the promises 
in an iterable resolves or rejects, with the value of reason from
options:
a catch
b race
c finally
d try catch
*/
// Question  ---- 5
/*
var x = 10;
var foo = {
    x: 20,
    bar: function() {
        var x = 30;
        return this.x;
    }
};
console.log(
    foo.bar(),
    (foo.bar)(),
    (foo.bar = foo.bar)(),
    (foo.bar, foo.bar)()
);
// options: 20 10 10 10, 20 20 10 10, 10 20 10 10, 10 10 10 20
// Output: 20 20 10 10
*/
// Question  ---- 6
/*
var f = (
    function f() {
        return "1";
    },
    function() {
        return 2;
    }
)();
console.log(typeof f);
// options: function, undefined, number, string
// ouput : number
*/
// Question  ---- 7
/*
.... method is used in the case of passing the cordinates of the mouse pointer to determine which element the mouse is over?

a. getBoundingClientRect()
b. getElementFromPoint()
c. elementFromPoint()
d. getElementCoordinates();
// output : c. elementFromPoint()
*/

// Question  ---- 8
/*
var f = function g() {
    return 23;
}
console.log(typeof g());
// options: number, undefined, error, function
// ouput: error (g is not defined)
*/
// Question  ---- 9
/*
how do you check if a variable is an array in javascript
a. typeof variable === 'Array'
b. Array.isArray(variable);
c. can't be determine
d. none of the above 
// ouput: b.  Array.isArray(variable);
*/
// Question  ---- 10
/*
..... properties return the horizontal and vertical distance between the outside of an element's 
padding and the outside of its border
a. offsetLeft and offsetTop
b. clientWidth and clientHeight
c. clientLeft and clientTop
d. scroolWidth and scrollHeight
*/
// Question  ---- 11
/*
...... only works with event handler registered with addEventListener() when the third argument is true.
a. Event bubbling
b. Event Handling
c. Event Capturing
d. Event registering
// output : c. Event Capturing
*/
// Question  ---- 12
/*
The return type of getElementByClassName() is
a. Dom
b. Document
c. node
d. nodeList
// output: nodelist
*/
// Question  ---- 13
/*
var foo = {
    x:1,
    y: function() {
        console.log(this.x);
    }
};
var x = 2;
var z = foo.y;

console.log(foo.y());
console.log(z());
// Options: a. 1,2  b. 2,1   c. 1, undefined     d. none of the above
// output: 1 undefined 2 undefined    so output is d
*/

// Question  ---- 14
/* 
Which class represents an embeded template that can be used to instantiate embeded views?
a. ViewContainerRef
b. TemplateRef
c. EmbededViewRef
d. ElementRef
// output: b. TemplateRef
*/
// Question  ---- 15
/* 
When building custom form components, what interface do they components need to implement to participate in forms?
a. ControlValueAccessor
b. CheckBoxControlValueAccessor
c. DefaultValueAccessor
d. SelectControlValueAccessor
// output: a. ControlValueAccessor
*/
// Question  ---- 16
/* 
How does angular 4 improved error handling, when an error is caused by something in a template?
a. By enabling Typescript StrictNullChecks
b. By creating flattened versions of Angulr module
c. By generating source maps in term of original template
d. None of the above
*/
// Question  ---- 17
/* 
How to declare template reference variable
a. <input $customInput>{{customInput.value}}</label>
b. <input customInput>{{customInput.value}}</label>
c. <input let customInput>{{customInput.value}}</label>
d. <input #customInput>{{customInput.value}}</label>
// output: d. <input #customInput>{{customInput.value}}</label>
*/
// Question  ---- 18
/*
Which of the following service is used to handle uncaught exceptions in AngularJs?
a. $errorHandler
b. $exception
c. $log
d. $exceptionHandler
// Output: a. $errorHandler 
*/
// Question  ---- 19
/*
What does the $dirty flag indicates in Angular js
a. It indicates the value cannot be changed
b. it indicates the form has invalid data
c. it indicates that value has been changed
d. none of the above
// Output: c. it indicates that value has been changed
*/
// Question  ---- 20
/*
Who is sometimes called as father of Angular js
a. Brad Green
b. Igor Minor
c. Misko Hevery
d. Brian Ford
// Output: c. Misko Hevery
*/
// Question  ---- 21
/*
var x;
console.log((typeof x) === 'undefined');

// options: True, False, ReferenceError X is not defined, undefined
// Output: True
*/
// Question  ---- 22
/*
What is the practice of broadcasting to a list of multiple subscribers in a single execution
a. Multitasking
b. Multithreading
c. Multiplexing
d. Multicasting
// Output: 
*/
// Question  ---- 23
// Question  ---- 24
// Question  ---- 25