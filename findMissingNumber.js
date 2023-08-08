//using xor
//limitations, the arr can't contain duplicates of a number
function findMissingNumber(arr){
    //this function takes advantage that xoring all numbers from 1 to n, then xoring the array will return 
    //the missing number. This is because duplicate numbers will cancel each other out
    let xorSum = 0;
    let xorSum2 = 0
    for (let i=1; i < arr.length + 1; i++) {
        xorSum ^= i;
    }

    //this will essentially cancel out each of the duplicates one by one
    //xor is communative, order of operands does not affect the result
    //XOR (exclusive OR) is also associative, which means the grouping of operands does not affect the result.
    // In other words, (a XOR b) XOR c is equivalent to a XOR (b XOR c)
    //so array doesn't need to be sorted.

    for (let num of arr){
        xorSum ^= num
    }

    return xorSum ^ xorSum2


}
let arr = [1,2,3,4,5,6,7,8,9,10,12];
//console.log(findMissingNumber(arr));

//sum of series method
arr = [1,2,3,5,6,7,8,9,10,,11,12];
function findMissingNumber2(arr) {
    //the sum of a series from 1 to n is (n * (n+1))/2
    // add one to account for the missing number
    n = arr.length + 1
    // sum the complete the series
    sumOfSeries  = (n * (n+1))/2

    //sum array
    sumofArray = arr.reduce((acc, num) => acc + num, 0)
    return sumOfSeries - sumOfArray

}
//console.log(findMissingNumber(arr));

//doesn't work if last number in the array is missing.
arr = [1,2,3,4,5,6,7,8,9,10,11,];
//set difference
function findMissingNumber3(arr){
    const n = arr.length + 1

    //all nums 1 to n (set for unique values)
    let allNumbers = [...Array(n).keys()].slice(1);

    const difference = allNumbers.filter((x) => !arr.includes(x) ||  x === n )

    return difference

}

console.log(findMissingNumber3(arr));


arr = [1,2,3,4,5,6,7,8,10,11];
function findMissingNumber4(arr){
    arr.sort((a, b) =>  a - b )

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== i + 1 ){
            return i + 1
        }
    } return arr.length + 1
}

console.log(findMissingNumber4(arr));




