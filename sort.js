const arr = [1,3,4,2,8,6,5,0,9,7,6]

//sorts ascending
//If the result is negative, a comes before b, so a is placed before b in the sorted array.
//If the result is zero, there's no change in position, so a and b maintain their relative order.
//If the result is positive, b comes before a, so b is placed before a in the sorted array.
console.log(arr.sort((a, b) => a - b))

//sorts descending
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