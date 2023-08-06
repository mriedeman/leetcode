//for each, filter should have been obvious beacause of if statement
function countVowels(str) {

    const vowels = ['a', 'e','i', 'o', 'u'];
    let count = 0;

    str = str.toLowerCase();

    [...str].forEach((letter) => {
        if (vowels.includes(letter)){
            count++;
        }
    })

    return count;
}

console.log(countVowels('Super'));


//regex method
function countVowels2(str) {

    const vowelRegex = /[aeiou]/gi;
    const matches = str.match(vowelRegex)

    return matches ? matches.length : 0;
}

console.log(countVowels2("NotebookU"));

//filter method
function countVowels3(str) {

    const vowels = ['a', 'e','i', 'o', 'u'];
    str = str.toLowerCase();
    let vowelCount = [...str].filter(letter => vowels.includes(letter)).length;

    return vowelCount;
}

console.log(countVowels3("Louie"));


//reduce method
function countVowels4(str){
    str = str.toLowerCase();
    const vowels = ['a', 'e','i', 'o', 'u'];
    let count = 0;
    let initialValue = 0;
    return [...str].reduce((countTally, currentLetter) => {
        let increment = vowels.includes(currentLetter) ? 1: 0
        return increment + countTally;
    }, initialValue)

}

console.log(countVowels4("Kiley"));
