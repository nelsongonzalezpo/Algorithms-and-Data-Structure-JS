/**
 * Creating pointers or values that correspond
 * to and index or position and move towards the beginnning
 * ennd or middlle based on a certain condition.
 * 
 * Very efficient for solving problems with minimal
 * space complexity as well.
 */


//Naive Solution O(n^2)
// function sumZero(arr1) { 

//     arreglo1.sort()

//     for (let i = 0; i < arr1.length; i++) { 
//         for (let j = i+1; j < arr1.length; j++) {
//             if (arr1[i] + arr1[j] === 0) { 
//                 return [arr1[i] , arr1[j]]
//             }

//         }
//     }

// }

let arreglo1 = [-4,-3,-2,-1,0,1,2,5]

// console.log(sumZero(arreglo1))

//Refactor Solution O(n)
function sumZero(arr) {

    let left = 0
    let right = arr.length - 1
    
    while (left < right) { 
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else { 
            if (sum > 0) right --
            else left ++
        }
    }

}

function countUniqueValues(arr) {

    var i = 0;
    if(!arr.length) return i
    for (var j = 1; j < arr.length; j++) { 
        if (arr[i] !== arr[j]) { 
            i++;
            arr[i] = arr[j]
        }
    }

    return i+1



}

let arreglo = [1, 1, 1, 2, 2, 2, 4, 5, 7]
// console.log(countUniqueValues(arreglo))