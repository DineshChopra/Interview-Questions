## First Round -- IQ Test, 50 questions in 12 minutes, No negative marking
    [Practice IQ Test](https://alliqtests.com/tests/3/5/)

## Second Round -- Execute Test case
* Sort string date array
e.g. 
Input
    let arr = ['10/17/13', '10/14/13', '10/18/13'];
Output
    arr = ['10/14/13', '10/17/13', '10/18/13'];

```
let arr = [ '10/17/2013', '10/14/2013', '10/18/2013'];
console.log(arr);
arr.sort((a,b) => {
    return new Date(a) - new Date(b);
});
console.log(arr);
```


* Minify String
Input: str = aaabbbcc
output: str = a3b3c2
```
var str = 'aaadbbbaccccbd';
let map = new Map();
for(let char of str) {
    let count = map.get(char) + 1 || 1;
    map.set(char, count);
}
let output = '';
for(let key of map) {
    output += key.join('');
}

console.log(output);
```

* Permutation of a string
let str =  abc;
output : abc, acb, bac, bca, cab, cba

```
var str = 'abc';
var ans = '';
var perOutput = [];
function permutation(str, ans) {
    if(str.length === 0) {
        perOutput.push(ans);
        return;
    }

    for(let i=0; i<str.length; i++) {
        let ch = str.charAt(i);

        let ros = str.substring(0, i) + str.substring(i + 1);
        permutation(ros, ans+ch);
    }
}
permutation(str, '');

```