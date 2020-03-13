// Create a function that differentiates a polynomial for a given value of x.

// Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

// Assumptions:
// There will be a coefficient near each x, unless the coefficient equals 1 or -1.
// There will be an exponent near each x, unless the exponent equals 0 or 1.
// All exponents will be greater or equal to zero
// Examples:
// differenatiate("12x+2", 3)      ==>   returns 12
// differenatiate("x^2+3x+2", 3)   ==>   returns 9

let obj = {
    '+': ",",
    '-': ",",
    '/': ",",
}

function differentiate(equation, point) {
    //Good luck
    let arr = []
    let signs = []
    for (let i = 0; i < equation.length; i++) {
        if (i !== 0) {
            if (obj[equation[i]]) {
                arr.push(obj[equation[i]])
                signs.push([equation[i]])

            } else {
                arr.push(equation[i])
            }
        } else {
            arr.push(equation[i])
        }

    }
    arr = arr.join('').split(",")
    let result = ''
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].includes('^')) {
            result += `${differentiateType2(arr[j])}${!!signs[j]?signs[j]:''}`
        }else if (!arr[j].includes('x')){
            result = result.slice(0,result.length - 1)
            continue
        } else {
            result += `${differentiateType1(arr[j])}${signs[j]}`
        }

    }
    console.log(result)
    let result1 = ''
    for (let k = 0; k < result.length; k++) {
        if(result[k] === 'x'){
            result1+= `*${point}`
            console.log(result[k])
        }else if(result[k] === "^"){
            result1+= `**`
        }else{
            result1+= result[k]

        }
        
    }
    console.log(result1)
    let resut = eval(result1)

    return resut
}


function differentiateType1(str) {
    let res = str.length > 1 ? str.split('x').join('') :  1
    return res

}
function differentiateType2(str) {
    let string = str.split('^')
    // console.log(parseInt(string[0]))
    if(string[0].length === 1){
        string[0] = `${parseInt(string[1])}${string[0]}`
    }else{
        let sub = string[0].split('x')
        sub[0] = parseInt(string[1]) * parseInt(sub[0])
        string[0] = `${sub[0]}x`
    }
    
    string[1] = parseInt(string[1]) - 1
    return string[1] > 1 ? string.join('^') : string[0]

}
// console.log(differentiateType1("12x", 3))
// console.log(differentiateType2("100x^3"))

// console.log(differentiate("12x+2", 3))
  console.log(differentiate("-7x^5+22x^4-55x^3-94x^2+87x-56", -3))
//   console.log(differentiate("-5x^2+10x+4", 3))
//   console.log(differentiate("x-66", 3))
