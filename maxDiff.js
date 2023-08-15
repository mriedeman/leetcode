//naive approach, does not include the part "such that the larger element appears after the smaller number"
function maxDifference(nums){
    let maxDiff = 0;
    for (let i = 0; i < nums.length - 1; i++){
        for(let j = 1; j < nums.length; j++){
            //console.log(`i: ${i} num: ${nums[i]}, num: ${nums[j]} j: ${j}`)
            difference = nums[j] - nums[i]
            if (maxDiff < difference) {
                maxDiff = difference;
            }
        }
    } if (maxDiff === 0) {
        return -1
    } else return maxDiff
}



// console.log(maxDifference([7, 2, 3, 10, 2, 4, 8, 1])); // Should return 8 (10 - 2)
// console.log(maxDifference([1, 1, 1, 1, 1])); // Should return -1 (no difference)
// console.log(maxDifference([5, 2, 9, 1, 7])); // Should return 8 (9 - 1)


//Keep Track of the minimum value encountered so far while iterating throught the array,
//And at each step, calculate the difference between the current element and the minimum value
function maxDifference2(arr){
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDiff < arr[i] - min) {
        maxDiff = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return maxDiff;
 }



console.log(maxDifference2([7, 2, 3, 10, 2, 4, 8, 1])); // Should return 8 (10 - 2)
console.log(maxDifference2([1, 1, 1, 1, 1])); // Should return -1 (no difference)
console.log(maxDifference2([5, 2, 9, 1, 7])); // Should return 8 (9 - 1)
console.log(maxDifference2([1, 2, 3])); //2
console.log(maxDifference2(3, 2, 1)); //-1
console.log(maxDifference2([2, 3, 10, 2, 4, 8, 1])); //8
console.log(maxDifference2([7, 9, 5, 6, 3, 2])); //2
console.log(maxDifference2([22, 2, 4, 5, 6, 444, 1, 666])); //665
console.log(maxDifference2([7, 9, 5, 6, 3, 2])); //2
console.log(maxDifference2([666, 555, 444, 33, 22, 23])); //1
console.log(maxDifference2([2, 3, 10, 2, 4, 8, 1])); //8





