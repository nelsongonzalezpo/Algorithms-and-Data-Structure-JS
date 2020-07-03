//Ex3

function averagePair(arr, num) { 

    let start = 0
    let end = arr.length - 1
    while (start < end) { 
        let avg = (arr[start] + arr[end] / 2)
        if (avg === num) return true
        else if (avg < num) start++
        else end--
    }

    return false

}

let arreglo1 = [1,2,3,4,5,6]
console.log(averagePair(arreglo1, 20))

function isSubSequence(word1, word2) {
    
    if (!word1 || !word2) return false
    if(word2.includes(word1)) return true

}

console.log(isSubSequence('hello', 'hello world'))