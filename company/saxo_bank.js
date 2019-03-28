// Multiple choice questions

console.log('Sexo bank ');
/*
// Question --- 1
var a = 10;
var b = function(){
    var a = 20;
}

b();
console.log(a); // output is 10

// Question --- 2

var emp = {
    firstName: 'ABC',
    lastName: 'XYZ',
    printFullName: function(){
      return function(){
        console.log(this.firstName + " " + this.lastName);
      }
    }
  }
emp.printFullName()(); 
// Output is undefined undefined, because it try to find out firstName and lastName from global window object
// Question --- 3
var a = 10,
    b = 20,
    c = 30;
var d = 40;
console.log(a);
setTimeout(function(){
  console.log(b);
}, 10);
setTimeout(function(){
  console.log(c);
}, 0);
console.log(d); 
// output is 10 40 30 20

// Question --- 4

var a = 10;
(function(){
  console.log(a);
  console.log(xyz());
  var a = 1;
  function xyz(){
    return 2;
  }
})(); 

// Output: undefined 2
// Question --- 5
var abc = {
    price: 20.99,
    get_Price: function(){
      return this.price;
    }
  };
  var xyz = Object.create(abc);
  xyz.price = 19.99;
  delete xyz.price;
  console.log(xyz.get_Price()); 
  // Output: 20.99

// Question --- 6
var obj = {
    value: "Hello World",
    method: function(){
      alert(this.value);
    }
};
var method = obj.method;
method.bind(obj);
method();
// output: undefined 
  
// Question --- 7
for(var i=0; i<5; i++){
    setTimeout(function(){
      console.log(i);
    }, i* 1000);
  } 
// output: 5,5,5,5,5

// Question --- 8
var arr = [1,2,3,4,];
arr[99] = 5;
console.log(arr.length); 
// output: 100

// Question --- 9
var out = (function f(f){
    return typeof f();
  })(function(){
      console.log('Argument function');
      return 1;
    });
console.log(out);
// output: number 

// Question --- 10
var foo = {
    bar: function () {
        return this.baz;
    },
    baz: 1
};
var out = (function () {
    return typeof arguments[0]();
})(foo.bar);
console.log(out);
// output: undefined

// Question --- 11
var f = 10;
(function(){
  f=1;
  console.log(f);
  return;
  function f(){}
})(); 
// output : 1;

// Question --- 12
let x, {x: y = 1} = {x}; y; 
*/
// Question --- 13
/*
var out = (function () {
    let f = this ? class g { } : class h { };
    console.log('f -- ', f);
    return [
        typeof f,
        typeof h
    ];
})(); 
console.log(out);
// output: ['function', 'undefined']
*/