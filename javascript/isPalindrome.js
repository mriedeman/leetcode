

function isPalindrome(str) {
    // Palindrome - a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

    //compare the original str to the reversed version of itself
    //the one liner
    let reversedStr = str.toLowerCase()
                     .split('')
                     .reverse()
                     .join('')
                     .replace(/,/g,"");

    // console.log('Split the string by character into an array to apply some transformations');
    // reversedStr = reversedStr.toLowerCase();
    // reversedStr = str.split('');
    // console.log(reversedStr);

    // console.log("Reverse the array with the array reverse method");
    // reversedStr = reversedStr.reverse();
    // console.log(reversedStr);


    // console.log('Join the string back together');
    // reversedStr = reversedStr.join('');
    // console.log(reversedStr);

    // console.log('---------------')

    // console.log("Remove the punctuation from the string");
    // reversedStr = reversedStr.replace(/,/g,"");
    // console.log(reversedStr);

    if (str === reversedStr){
        return true
    } else {
        return false;
    }

}




console.log((isPalindrome("racecar"))); // Should output true
console.log((isPalindrome("hello")));   // Should output false
console.log((isPalindrome("A man, a plan, a canal, Panama"))); // Should output true


/* Time Complexity: The time complexity of your solution is not O(1).
 It is actually O(n), where n is the length of the input string.
This is because each operation you perform, such as splitting, reversing, and joining the string,
takes linear time proportional to the length of the string.*/