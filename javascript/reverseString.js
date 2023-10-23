function reverseString(str) {

    strArr = str.split('');
    reversedStrArr = []
    //loop through the array backwards and push the values to the new array
    for (let i = strArr.length - 1 ; i >= 0; i--) {
        reversedStrArr.push(strArr[i]);
    }

    return reversedStrArr.join('')
}

console.log(reverseString("hello")); // Should output "olleh"
console.log(reverseString("JavaScript")); // Should output "tpircSavaJ"
console.log(reverseString("racecar")); // Should output "racecar"


//alternative method
function reverseString2(str) {

    reverseStr = ''

    for (let char of str) {
        reverseStr = char + reverseStr;
    }

    return reverseStr;
}


console.log(reverseString2('milo'));


function reverseStr3(str){
    return [...str].reverse().join('');
}

console.log(reverseStr3("Star Wars"));

//recursion

function reverseStr4(str) {
    if (str === "") {
        return '';
    }else {
        return reverseStr4(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStr4("RECURSION"));