function reverse(word){

    if(word.length <= 1) return word
    return reverse(word.slice(1)) + word[0]
}

function palindrome(word){
    if(word.length === 1) return true;
    if(word[0] === word.slice(-1)) return palindrome(word.slice(1,-1));
    return false;
    

}

function capitalizeFirst(arr){


}

function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

let arr = ['juan', 'paco', 'pedro']
let word = 'hola';
// console.log(reverse(word))
// console.log(palindrome('boba'))
console.log(capitalizeWords(arr))