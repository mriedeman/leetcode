//recursion
function findFib(n){
    //In fibonacci, the next number is the sum of the previous two
    //0, 1, 1, 2, 3, 5, 8, 13, 21,

    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n > 1) {
        
        curr = findFib(n - 1) + findFib(n - 2)
        return curr
    }
    
}

console.log(findFib(10));

//iteration
function findFib2(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    prev2 = 0;
    prev = 1;
    let current; //nth fib

    for (let i = 2; i <= n; i++){

        //calculate nth fib
        current = prev2 + prev;
        //move up the prev and prev2 one spot for next calc
        prev2 = prev;
        prev = current;
    }
    return current;
}

console.log(findFib2(24));