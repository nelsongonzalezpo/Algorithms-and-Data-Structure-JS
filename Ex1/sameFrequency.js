//Ex 1

function sameFrequency(number1, number2) {
    
    let parsedNumber1 = number1.toString()
    let parsedNumber2 = number2.toString()
    if (!number1 && number2) return false
    if (number1.length !== number2.length) return false
    
    let objeto = {}

    for (let i = 0; i < parsedNumber1.length; i++) { 
        let actual = parsedNumber1[i]
        objeto[actual] ? objeto[actual] ++ : objeto[actual] = 1
      
    }

    for (let i = 0; i < parsedNumber2.length; i++) {
        let actual = parsedNumber1[i]
        if (objeto[actual]) objeto[actual]--
        else return false
    }

    return true

}

console.log(sameFrequency(100,001))