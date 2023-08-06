function longestWord(str){
    let words = str.split(' ')
    let longestWord = ''
    for (let word of words){
        if (word.length > longestWord.length){
            longestWord = word;
            console.log(longestWord);
        }
    }
    return longestWord
}

console.log(longestWord("The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add."));



function longestWord2(str) {
    let words = str.split(' ')
    let longestWord = '';
    return words.reduce((longest, word) =>  {
        return word.length > longest.length ? word : longest;
    }, longestWord)
}

console.log(longestWord2("Kiley is sitting on the couch eat tacos."));


function longestWord3(str){
    let words = str.split(' ')
    let lengths = words.map(word => word.length);
    let maxLength = Math.max(...lengths);

    console.log(lengths);
    console.log(...lengths);

    //this is why you need the spread operator
    console.log(Math.max(7, 3));
    console.log(Math.max([7,3]));


    let longestWord = words.filter(word => word.length === maxLength);
    return longestWord;

}
console.log(longestWord3("My girlfriend is laying on the couch and looking at hilarious memes"));
