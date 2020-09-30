function checkingUsername(user){
    let users = ['juan','paco','pedro']
    return users.indexOf(user)
}

// console.log(checkingUsername('julian'))

/**
 * Describe what a searching alg is
 * Implement linear search on arrays
 * Implement binary search on sorted arr
 * Implement naive string search alg
 * Implement the KMP string search alg
 */

 let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

 /**
  * Compare every register
  */

  function searchingTest(word){
    let founded = false;
    states.forEach(element => {
        if(element.toLowerCase() === word.toLowerCase()) founded = true;
    });
    return founded;
  }

  function searching2(word){
      let founded = false;
      if(!states.indexOf(word)) founded = true
      return founded;
  }

//   console.log(searchingTest('Alabama'))
//   console.log(searching2('Alabama'))

function linearSearch(arr, word){
    let result = -1;
    if(arr.indexOf(word) >=0) result = arr.indexOf(word);
    return result;
}

function linearSearch2(arr, word){
    for(var i = 0; i<arr.length; i++){
        if(word === arr[i]) return i      
    }

    return -1
}

// console.log(linearSearch(states, 'Alabama'))
console.log(linearSearch2(states, 'Florida'))