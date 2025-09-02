const add = (num1, num2) => num1+num2
const substract = (num1, num2) => num1-num2
const divide = (num1, num2) => {
    if(num2 === 0) {
        throw new Error('Division by 0 is not possible')
    }
    return num1/num2
}
const multiply = (num1, num2) => num1*num2
console.log(add(2,4))
console.log(divide(2,0))
