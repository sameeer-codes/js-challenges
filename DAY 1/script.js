// Day 1 Challenge: Reverse a String

// Write a function in JavaScript that takes a string as input and returns the reversed version of it.

function reverseStr(str) {
    str = str.split('').reverse().join('');
    return str;
}

let str = 'Hello World';

console.log(reverseStr(str))