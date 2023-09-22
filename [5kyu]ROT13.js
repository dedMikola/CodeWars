// ROT13 is a simple letter substitution cipher that replaces a letter with 
// the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message) {
    let arr_en = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split("")
    let newLetter;
    return message.split("").reduce((newArr, letter) => {
        if (!arr_en.includes(letter)) {
            newArr.push(letter)
        }
        newLetter = arr_rot13[arr_en.indexOf(letter)]
        newArr.push(newLetter)
        return newArr
    }, []).join("")

}
