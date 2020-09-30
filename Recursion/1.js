/**
 * Recursion
 * 
 * Process that calls itself
 * 
 * 
 * 
 */

//Check for odds - Normal function
function checkForOdds(arreglo){

    let responseArray = [];
    arreglo.forEach(element => {
        if(element % 2 === 0){
            responseArray.push(true)
        } else {
            responseArray.push(false);
        }
    });

    return responseArray;
}

/**
 * 
 * Built in data structure that manages what happens when functions are invoked (STACK)
 */

 //Example

 function takeShower(){
     return 'Taking Shower'
 }

 function eatBreakfast(){
     let meal = cookFood()
     return `Eating ${meal}`
 }

 function cookFood(){
     let items = ['Oatmeal', 'Eggs', 'Cornflakes']
     return items[Math.floor(Math.random()*items.length)]
 }

 function wakeUp(){
     console.log(takeShower())
     console.log(eatBreakfast())
     console.log('Ready to work')
 }

 
//  wakeUp()

function countDown(num){

    if(num <= 0){
        console.log('End')
        return;
    } else {
        console.log(num)
        num--
        countDown(num)
    }

}

// countDown(10);

function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num-1)
}

// console.log(sumRange(4))

function factorial(num){
    if(num === 1) return 1
    return num * factorial(num-1)
}

// console.log(factorial(4))


/**
 * Helper method recursion (PATTERN)
 */

 function collectOds(nums){
     
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] %2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(nums)
    return result;

 }

 function sumArray(arr){
     let result = 0;

     function helper(nums){
         if(nums.length === 0){
             return
         }

         result += nums[0]
         helper(nums.slice(1))
     }

     helper(arr)
    return result;
 }

 /**
  * Pure Recursion
  */
 function collectOds2(arr){

    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] %2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOds2(arr.slice(1)))
    return newArr;
 }

 function power(base, exp){

    if(exp === 0){
        return 1;
    } else{
        return base * power(base, exp-1);
    }
 }

 function newFactorial(num){
     let result = 1;
     if(num === 0 || num === 1){
         return result;
     } 
     result = num * newFactorial(num-1) 
     return result
 }

 function productOfArray(arr){

    if(arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1));
    
 }

 function recursiveRange(num){

    if(num === 0) return 0
    return num + recursiveRange(num-1)

 }

 function fibonacci(num){

    if(num <= 2) return 1
    return fibonacci(num-1) + fibonacci(num-2)
     
 }




testArrayLow = [1,2,3,4,5]
testArray = [3142, 1234, 4333, 1999];
// console.log(checkForOdds(testArray));
// console.log(collectOds(testArray));
// console.log(sumArray(testArrayLow))
// console.log(collectOds2(testArrayLow))
// console.log(power(2,2))
// console.log(newFactorial(4))
// console.log(productOfArray([1,2,3,4,5]))
// console.log(recursiveRange(4))
console.log(fibonacci(28))