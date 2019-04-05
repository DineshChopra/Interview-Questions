console.log('Saxo bnak');

// [https://photos.app.goo.gl/EYWoRnwcjkYTsAt49](https://photos.app.goo.gl/EYWoRnwcjkYTsAt49)
/*
 A twin of a word is a word written with the sam letters (case insensitive), but not in the same order
    e.g Silent is a twin of Listen

 */
function isTwin(a,b) {
    return makeSortAndLowerCase(a) === makeSortAndLowerCase(b);
}
function makeSortAndLowerCase(str) {
    return str.toLowerCase().split('').sort().join('');
}
console.log(isTwin('Silent', 'Listen'));

// Next question
var i = 3;
function change(j) {
    j = 4;
}
change(i);
console.log(i);

// Next Question
var t = [9,8, 7, 6, 5, 4, 3, 2, 1, 0];
function isOnEvenPosition(table, value){
    const index = table.indexOf(value);
    return index%2 === 0;
}
console.log(isOnEvenPosition(t, 6)); // false
console.log(isOnEvenPosition(t, 3)); // true

// Next question ----- 

var obj = {
    john: 12,
    brian: 1,
    doe: 1,
    fred: 1
}

function helloProperties(obj) {
    const output = [];
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            output.push('Hello-'+key);
        }
    }
    return output;
}
console.log(helloProperties(obj));


// Next Question : 18

function solution(input) {
    return input.split(' ').join('\n');
}
console.log(solution('Hello you !'));

// Next Question 31
var MyClass = function(n) {
    this.n = n;
}
MyClass.square = function() {
    return this.n * this.n;
}
var obj = new MyClass(4);
console.log(obj.square());
