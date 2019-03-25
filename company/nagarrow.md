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
# 16 March 2019, Coding Test
## Question 1
Given 'n'(1 <= n <= 1000) integers, find the majority element (the integer which occurs more than half the times. i.e. occurs more than n/2 times). If there is no element which occurs more than n/2 time return -1.
Note: the number in the array can contain a negative number also.

Input specification:

input1: the number 'n'
input2: an array of 'n' integers

Output specification:
Return the majority element or -1 accordingly

Example 1:
input1: 3
input2: {1,2,1}

Output: 1

Explanation:
The element '1' appears 2 times, which is more than the half of the total number of elements.

Example2:
input1: 4
input2: {1,2,1,2}

output: -1

Explanation: 
The element '1' appears two times, which is equal to the half of the total number of elements. Similarly for 2

Since no number appears nore than half of the total no of elements.
Hence the output is -1

## Question 2
Modify varaible names

Variables in any programming languages should be names in such a way that the name itself clarifies its purpose. However we can not have a variable name having multiple words separated by space. Therefore we use different approaches.

In c++ : this_is_a_variable
In Java: thisIsAVariable

Your task is to convert a C++ variable name into a java variable name or vice versa. Assume that a java variable name never contains '_' before any alphabat. In other words, If the given variable name contains '_'  before any alphabet, treat the given variable name as a C++ variable name and generate the output as a java variable name otherwise vice versa.

Input
input1: a string representing the variable name

Output:
Return the transformed variable name.

Example 1
input: modify_variableName
Output: modifyVariableName

Example 2
input: thisIsAVariable
output: this_is_a_variable

## Question 3
Frequency Count

Given a String, find the frequencies of each of the characters in it.
Then input string contains only lowercase letters. The output string should
contain a ltter followed by its frequency, in the alphabatical order (from a to z)

Input Specification:
input1: the input string

Output specification:
Return a String representing the frequency counts of characters in the input string.

Example 1
input: babdc
output: a1b2c1d1
Explanation:
In the input string 'a' appears once, 'b' twice, 'c' and 'd' appears once. Therefore, in 
alphabatical order the output should be a1b2c1d1

Example 2
input: phqgh
output: g1h2p1q1
Explanation: 
In the input string, 'g' appears once, 'h' appears twice, 'p' and 'q' appears once.
Therefore, in aplhabatical order the output should be g1h2p1q1
