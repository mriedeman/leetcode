function reverseString(s) {
    let stack = [];
    let reversedStr = '';

    for (let char of s){
        stack.push(char)
    }

    //console.log(stack);

    //you are modifying the stack as you iterating through it so this won't behave as expected
    // for (let har of stack) {
    //     reversedStr += stack.pop()
    // }
    //console.log(stack);

    while (stack.length > 0){
        reversedStr += stack.pop();
    }

    return reversedStr

    
}

console.log(reverseString('hello'))