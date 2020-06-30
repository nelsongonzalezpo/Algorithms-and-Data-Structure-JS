//Working with arrays, objects and buillt in methods

/**
 * WHEN TO USE OBJECTS
 * 1. When you dont neeed order
 * 2. When you need fast access / insertion and removal
 */

/**
* WHEN TO USE OBJECTS
* 1. When you need order
* 2. When you need fast access / insertion and removal (sort of)
*/


//Objects

let first = { 
    name: 'Juan',
    isMan: true,
    luckyNumbers: [1,2,3]
}

// console.log(Object.keys(first))
// console.log(Object.entries(first))
// console.log(first.hasOwnProperty('name'));
// console.log(first.hasOwnProperty('names'));

// Arrays
//Best inserting and deleting at last O(1) / At first it causes complexity time O(n)

let names = ['Juan', 'Paco', 'Pedro']
// console.log(names)
names.push('Jose') //best scenario
// console.log(names)
names.unshift('Maria') //not as good
// console.log(names)
names[3] = 'Marco'
// console.log(names)