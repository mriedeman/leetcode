function toTitleCase(str) {
    let wordArr = str.split(' ')
    noCapsNeeded = ['in', 'of', 'or', 'a', 'at', 'by', 'the']
    let titleCaseArr = [];
    
        wordArr.forEach((word, index) => {
            //Always Capitalize the first word
            if (index === 0 || !noCapsNeeded.includes(word)) {
                titleCaseArr.push(word.slice(0,1).toUpperCase() + word.slice(1))
            } 
            else titleCaseArr.push(word)
        }
        )
        return titleCaseArr.join(' ');
    }

console.log(toTitleCase('the quick brown fox jumped over the lazy dog.'))