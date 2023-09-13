//The Caesar cipher is a type of substitution cipher where each letter in the plaintext is 'shifted' a certain number of 
//places down the alphabet. For example, with a shift of 1, 'A' would be replaced by 'B', 'B' would become 'C', etc. 
//The key in this cipher is the number of positions each letter in the plaintext is shifted.

//Create a function that takes a string and a shift factor and returns a new string after the Caesar cipher has been applied.

function caesarCipher(message, shift){
    const cipherArr = [];
    //handle large shifts
    // const alphabetLength = 26;
    // shift = shift % alphabetLength;

    message.split('').forEach((letter)=> {

        let charCode = letter.charCodeAt(0) + shift;
        //logic for wrapping arround all caps letters
        if (charCode > 90) {
            //(charCode - 91) calculates how far we have gone beyond 'Z'
            //Then we add 65 positions the correct distance into the alphabet from A
            charCode = 65 + (charCode - 91); 
        } else if (charCode < 65){
            //(64-charCode) calculates how far we have gone back before 'A'
            //Subtracting this from 90 then positions the correct distance back into the alphabet from z
            charCode = 90 - (64 - charCode);
        }
        cipherArr.push(String.fromCharCode(charCode))
    })

    const cipher = cipherArr.join('')

    return cipher
}

console.log(caesarCipher("MICHAEL", 1));