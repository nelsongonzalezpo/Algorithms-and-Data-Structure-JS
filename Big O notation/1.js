//Intro Big O Notation
//Better means: Faster(programming and executing), less memory, more readable

//Big O: It allows us to tallk formally about how the runtime of an algorithm grows as the input grows

/* Rules of thumb are consequences of the definition of Big O notation

Constants don't matter  O(1) or O(2n)
Smaller terms dont matter O(1000n + 50) or O(n+10)

1. Arithmetic operations are constant
2. Variable assignment is a constant
3. Accessing elements in an array (by index) or object (by key) is a constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

*/

/* Space complexity in JS

1. Most primitive (b00leans, numbers, undefined, nulll) are constant spaces
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O(n), where n is the length for arrays or the number of keys (for objects)

*/

//Most common complexities -> O(1), O(n), O(n^2)

/**
 * The logarithm of a number roughly measures the number of
 * times you can divide that number by 2
 * before you get a value that's less than or equal to one 
 */

//First solution
const { performance } = require('perf_hooks');

function sumNumbers(upLimit) {

    let result = 0;
    if (!upLimit) {
        return result
    } else if (upLimit < 1) {
        result = -1
    } else {

        for (let i = 0; i <= upLimit; i++) { 
            result += i;
        }
    }

    return result

}

let t1 = performance.now();
// console.log(sumNumbers(10000))
let t2 = performance.now();

//Second solution
function addUpTo(n) { 
    return n * (n+1) /2
}

let t3 = performance.now();
// console.log(addUpTo(10000))
let t4 = performance.now();

// console.log(t2 - t1)
// console.log(t4-t3)


//Counting up and down
function countingUD(number) {

    if (!number) {
        return null
    } else if (number < 0) {
        return -1
    } else {
        for (let i = 0; i <= number; i++) { 
            console.log(i)
        }

        for (let i = number; i >= 0; i--) {
            console.log(i)
        }
    }
}

// countingUD(10);

function printPairs(number) { 

    if (!number) {
        return null
    } else if (number < 0) {
        return -1
    } else {
        for (let i = 0; i <= number; i++) { 
            if (i % 2 === 0) { 
                console.log(i)
            }
        }
    }
}

// printPairs(100)

function logAtLeast5(number) {

    if (!number || number < 5) {
        for (let i = 0; i <= 5; i++) {
            console.log(i)
        }
    } else {
        for (let i = 0; i <= number; i++) { 
            console.log(i)
        }
    }
}

// logAtLeast5(10)

function logAtLeast5New(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
     }
}
// logAtLeast5New(2)

function doubleArray(arr) { 

    if (arr) { 
        var newArr = []
        for (let i = 0; i <= arr.length-1; i++) { 
            newArr.push(arr[i] * 2)
        }
    }

    console.log(newArr)

}

// doubleArray([1,2,3])


//Reverse word example
function reverseWord(word) { 

    if (word) {
        let newWord = word
        return newWord.split('').reverse().join('');
    } 

    return 
    
}

function print10Times(word) { 

    var wordArray = [];

    if (word) {
        for (var i = 0; i < 10; i++) { 
             wordArray.push(word)
        }
    }

    return wordArray

}

function initialize() { 

    let palabra = 'anita';
    let word = reverseWord(palabra)
    console.log(reverseWord(word))
    
    let wordArray = print10Times(word)
    console.log(wordArray)
}

// initialize();

