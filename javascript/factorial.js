//iterative approach
function factorial(num) {
    //the product of an integer and all the integers below it
    let total = 1;
    if ((num === 0) || (num === 1)) {
        return 1
    }else {
        while (num > 0){
            //total = 1 * 8
            //total = 8 * 7;
            //total = 56 * 6
            total *= num;
            num--;
        }
    } return total

}

console.log(factorial(8));

//recursive solution
function factorial2(num) {

    if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial2(num -1);
      }
}

console.log(factorial2(10));