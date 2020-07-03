/**
 * Patter involves creating a window which can
 * either be an array or number from one position to another
 * 
 * Very useful for keeping track of a subset of data
 * in an array/string
 * 
 */

 
//Naive O(n^2)
// function maxSubArraySum(arr, num) { 

//     if (num > arr.length) return null
    
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) { 
//         temp = 0;
//         for (let j = 0; j < num; j++) { 
//             temp += arr[i + j]
//             // console.log(temp, arr[i], arr[j])
//         }


//         if (temp > max) max = temp
//         console.log(temp, max)
//     }

//     return max

// }

let arreglo1 = [1,2,3,4,5,6,10,3,2]
// console.log(maxSubArraySum(arreglo1, 3))

function maxSubArraySum(arr, num) { 

    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) { 
        maxSum = + arr[i];
    }

    tempSum = maxSum

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
        console.log(maxSum)
    }

    
    
    return maxSum

}
console.log(maxSubArraySum(arreglo1, 3))
