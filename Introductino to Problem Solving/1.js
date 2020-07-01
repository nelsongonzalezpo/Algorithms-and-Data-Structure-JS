//Problem solving - Basic Approach

/** Algorithm
 * Process or set of steps to accomplish a certain task
 * Everything in programming involves algooorithms
 * Foundation for being a successful problem solving and developers
 */

/** How imprve
* 1. Devise a pllan for solving problems
* 2. Master common problem solving patterns
*/

/** Problem solving
 * 1. Understanding the problem
 * 2. Explore concrete examples
 * 3. Break it down
 * 4. Solve/Simplify
 * 5. Look back and refactor
 */

 //Step 1 - Understangind the problem

const { performance } = require('perf_hooks');

 
function sumNumbers(a, b) { 
    let resultado = -1;
    if (a && b) { 
        resultado = a + b
    } 

    return resultado
}

// console.log(sumNumbers(1,2))

function charCount(str) {
    let result = {}
    if (!str) {
        return result
    } else { 
        let newStr = str.toLowerCase().split('')
        newStr.forEach(element => {
            if (/[a-z0-9]/.test(element)) { 
                if (result[element] > 0) result[element]++
                else result[element] = 1
            }
        });
    }
    return result
}

function charCount2(str) { 
    var obj = {}
    for (var char of str) { 
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) { 
            if (obj[char] > 0) obj[char]++
            else obj[char] = 1
        }
    }
    return obj;
}

function charCount3(str) {
    var obj = {}
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

let t0 = performance.now()
// console.log(charCount('anitalavalatina'))
let tu = performance.now()
// console.log(tu - t0 + ' nelson')

let t1 = performance.now()
// console.log(charCount2('anitalavalatina'))
let t2 = performance.now()
// console.log(t2 - t1 + ' colt')

let t4 = performance.now()
// console.log(charCount3('anitalavalatina'))
let t5 = performance.now()
// console.log(t5 - t4 + ' colt2')

