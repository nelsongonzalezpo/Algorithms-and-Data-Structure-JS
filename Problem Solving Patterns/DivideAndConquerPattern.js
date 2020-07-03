/**
 * Divide data set into smaller chunks and then repeating
 * a process with a subset of data
 */

 //Binary search

 //Naive Solution
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === val) { 
            return i
        }
    }

    return -1
}

let arreglo1 = [1,2,3,4,5,6]

// console.log(linearSearch(arreglo1, 6))

//Look for elements in a sorted array
function binarySearch(arr, val) { 


    let min = 0;
    let max = arr.length - 1
    
    while (min <= max) { 
        let middle = Math.floor((min, max) / 2)
        let currentElement = arr[middle]

        if (arr[middle] < val) {
            min = middle + 1
        }

        else if (arr[middle] > val) { 
            max - middle - 1;
        }

        else return middle
    }
    
    return -1

}


console.log(binarySearch(arreglo1, 3))