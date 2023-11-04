/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid and all the brackets are closed in the correct order. */

//strategy
//iterate over the string character by character
//each time you encounter an opening bracket, push it to the stack
//when you encounter a closing bracket/parenthesis, check the element at the top of the stack
function balanceParentheses(bracketsStr){
    let stack = []
    const hashMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of bracketsStr){
        //if it's an opening bracket, add to stack
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char)
        } //if closing bracket, check 
         else if (char === ')' || char === ']' || char === '}'){
            //check the last element of the stack
            if (stack[stack.length - 1] === hashMap[char]){
                stack.pop()
            } else { 
                return false
            }
        }
    }
    return stack.length === 0;

}

console.log(balanceParentheses("([{()}])")); // This should be true
console.log(balanceParentheses("([{(})]")); // This should be false
console.log(balanceParentheses("([{(")); // This should be false
console.log(balanceParentheses("})]")); // This should be false
console.log(balanceParentheses("")); // This should be true