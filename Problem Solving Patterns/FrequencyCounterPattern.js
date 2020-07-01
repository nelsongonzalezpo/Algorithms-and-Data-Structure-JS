//Problem solving pattern

/** How do you improve
 * 1. Devise a plan for solving problems (last section)
 * 2. Master common solving problems (this section)
 */

 /** Some Patterns
  * Frequency counter
  * Multiple pointers
  * Sliding window
  * Divide and conquer
  * Dynamic programming
  * Greedy algorithms
  * Backtracking
  */


//Naive solution O(n^2)
function same(arr1, arr2) { 
    if (arr1.length !== arr2.length) { 
        return false
    } 

    for (let i = 0; i < arr1.length; i++) { 
        let cIndex = arr2.indexOf(arr1[i] ** 2)
        if (cIndex === -1) {
            return false
        }
        arr2.splice(cIndex,1)
    }
    return true
}



//Refactored solution
function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr2) { 
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true
}

let arr1 = [1, 2, 3, 2]
let arr2 = [4, 4, 1, 9]
// console.log(same(arr1,arr2 ))

function anagram(first, second) {

    if (first.length !== second.length) return false
    const lookUp = {}

    for (let i = 0; i < first.length; i++) { 
        let letter = first[i]
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1

    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        if (!lookUp[letter]) return false
        else lookUp[letter] -= 1

    }


    return true
}

let first = 'bob'
let second = 'obb'
// console.log(anagram(first, second))


function validAnagram(word1, word2) {

    if (word1.length !== word2.length) return false
    let buscador = {}

    for (let val of word1) { 
        buscador[val] ? buscador[val]++ : buscador[val] = 1
    }

    for (let val of word2) {
        if (buscador[val]) buscador[val]--
        else return false
    }

    return true
}

// console.log(validAnagram('bob', 'bbo'))


