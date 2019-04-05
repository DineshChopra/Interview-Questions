function a () {
    console.log('a', this);
    console.log('a', this);
    
    function b() {
        console.log('b', this);
    }
    var c = () => {
        console.log('c', this);
    }

    b();
    c();
}
a();


var obj = {
    display () {
        console.log('Display ', this); // this refers to obj due to dynamically scope. because obj is calling it.
        var normalFunction = function() {
            console.log('Normal function', this); // this refer to window due to dynamically scope
        }
        var arrowFunction = () => {
            console.log('Arrow function', this); // this Refer to obj due to lexical scope 
        }
        normalFunction();
        arrowFunction();
    }
}
obj.display();
console.log('-----------------------');
console.log(false == "");  // true
console.log(false == []  ); // false -- true
console.log(false == {});   // false
console.log("" == 0  );    // true
console.log("" == []  );   // false -- true
console.log("" == {}  );   // false
console.log(0 == []  );    // false -- true
console.log(0 == {}  );    // false
console.log(0 == null  ); // true -- false

for(let i =0; i<100; i++){
    const randomNumber = Math.floor((Math.random() * 2) +1 ) - 1;
    console.log(`randomNumber : ${randomNumber}`);
}

function a() {
    const grandPaa = 'GrandPaa';
    return function () {
        const father = 'Father';
        return function() {
            const son = 'Son';
            console.log(`${grandPaa} > ${father} > ${son}`);
        }
    }
}
const grandPaa = a();
const father = grandPaa();
const son = father();


const boo = (s1) => (s2) => (s3) => console.log(`${s1} , ${s2}, ${s3}`);

console.log(boo('S1'));

function test() {
    var aaa = bbb = 10;
    console.log(`Test method ---- ${aaa}, ${bbb}`);
}
test();
console.log(`Test method ---- , ${bbb}`);

function singelton () {
    var instance = 0;
    return function () {
        instance++;
        return instance;
    }
}
var single = singelton();
console.log(single());
console.log(single());