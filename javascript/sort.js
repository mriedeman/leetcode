const arr = [1,3,4,2,8,6,5,0,9,7,6]

//sorts ascending
//If a - b is negative => [a, b]
//If a - b is postive => [b, a]

console.log(arr.sort((a, b) => a - b))

//sorts descending
//If b - a is positive => [b, a]
//If b - a is negative => [a, b]
console.log(arr.sort((a, b) => b - a))


function findMissingNumber(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) {
        return i + 1;
      }
    }
    return arr.length + 1;
  }