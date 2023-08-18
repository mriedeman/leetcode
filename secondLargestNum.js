
//sort array then index the second value O(n log n)
function secondLargest(arr){
    arr.sort((a, b) => b - a)

    const secondLargest = arr[1];

    return secondLargest
}

console.log(secondLargest([7, 2, 3, 10, 2, 4, 8, 1]));

//iterate through array once and keep track of largest/second largest O(n)
function secondLargest2(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i=0; i < arr.length; i++){

        if (arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest

}

console.log(secondLargest2([7, 2, 3, 10, 2, 4, 8, 1,0]));