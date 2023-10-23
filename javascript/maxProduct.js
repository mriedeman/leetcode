//You are given a list of integers.
//Write a function that finds and returns the maximum product that can be obtained by multiplying two different integers from the list.
//You may assume that the list contains at least two integers.

function maxProduct(nums) {

 //Find the two largest numbers and the two smallest numbers.
 let max1 = -Infinity, max2 = -Infinity;
 let min1 = Infinity, min2 = Infinity;

 //find the largest number
 for (const num of nums){
    //update large numbers
    if (num > max1) {
        //second largest max becomes previous max
        max2 = max1;
        //new max is found
        max1 = num;

    } //if the num is greater than max2 but less than max1
    else if (num > max2){
        max2 = num;
    }

    //update the small numbers
    if (num < min1){
        min2 = min1;
        min1 = num;
    }//if num is smaller than min2 but not smaller than min1
    else if (num < min2) {
        min2 = num;
    }

    //The max product could be the product of the two largest numbers (max1, max2)
    //or the the product of the two smallest numbers if they are both negative (min1, min2)
    
}
return Math.max(max1 * max2, min1 * min2)
}


console.log(maxProduct([-9, -2, 3, -7])); // Output: 63 is the highest product
console.log(maxProduct([1, 3, 5, 2])); // Output: 15 because 3 * 5 is the highest product
