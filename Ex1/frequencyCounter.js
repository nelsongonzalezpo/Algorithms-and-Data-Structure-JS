//Ex2

//
function frequencyCounterWithFreq(arr) {

    let objeto = {}
    let answer = null
    if (!arr) return -1

    for (let i = 0; i < arr.length; i++){
        let actual = arr[i]
        if (objeto[actual]) {
            objeto[actual] ++
            answer = true
        } else { 
            objeto[actual] = 1
            answer = false
        }

    }

    return answer

}

let arr = [1, 2, 3, 3]
// console.log(frequencyCounterWithFreq(arr))

function frequencyCounterWithMultiplePointers(arr) {

    var i = 0;
    let answer = null
    if (!arr) return -1
    
    for (let j = 1; j < arr.length; j++) { 

        if (arr[i] === arr[j]) {
            answer = true
            break
        } else { 
            answer = false
            arr[i] = arr[j]
            i++
        }

    }
    return answer
    
}
// console.log(frequencyCounterWithMultiplePointers(arr))