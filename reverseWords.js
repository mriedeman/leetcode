// Write a function to reverse the words in a given sentence while keeping the order of the words unchanged.
// For example, if the input is "Hello World", the output should be "World Hello".
// "  Your function should work for sentences of any length and    should handle leading,   trailing, and multiple spaces between words.  ""
let str = "  Your function should work for sentences of any length and    should handle leading,   trailing, and multiple spaces between words.  "
function reverseWords(str) {
    let words = str.split(' ');
    //console.log(words);
    let reverseWordsArr = [];
    for (let i = words.length - 1; i >= 0; i--){
        if(words[i] !== ''){
            reverseWordsArr.push(words[i]);
        }
    }
    return reverseWordsArr.join(" ");
}

console.log(reverseWords(str))


//using reduce
str = "    Write   a function to reverse     the words in a     given sentence while keeping the order of the words unchanged.      "
function reverseWords2(str) {
    let words = str.split(' ')
    let reverseSentence = words.reduce((sentence, word) => {
        if (word !== ''){
            return word + ' ' +  sentence;
        } return sentence //return the accumulator unchanged
    })
    return reverseSentence;
}
console.log(reverseWords2(str));

str = "For example, if the input is 'Hello World', the output should be 'World Hello'."
function reverseWords3(str) {
    let words = str.split(' ')

    let trimmedArr =  words.map(word => word.trim())
    return trimmedArr.reverse().join(' ')
}

console.log(reverseWords3(str));