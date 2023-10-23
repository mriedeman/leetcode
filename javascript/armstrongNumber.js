//Write a JavaScript function that checks whether or not a given number is an Armstrong number.

//An Armstrong number (also known as a narcissistic number or a pluperfect digital invariant) of a given number
//of digits is an integer such that the sum of its own digits each raised to the power of the number of digits
//is equal to the number itself.

//For example:

//1^3+5^3+3^3=153

//find the length of num
//split the digits up
//then raise each digit to length of num and sum
//if it is equal to the num them return true, else return false

function isArmstrongNumber(num){

    const exponent = num.toString().length;
    const numArr = num.toString().split('')

    let sum = 0; 
    for (let n of numArr){
    
        sum += parseInt(n)**exponent;
    }

    return sum === num;

}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(123));

//reduce method
function isArmstrongNumber2(num){

    const exponent = num.toString().length;
    const digits = num.toString().split('');

    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), exponent)}, 0)
    return sum === num
}

console.log(isArmstrongNumber2(153));
console.log(isArmstrongNumber2(123));

