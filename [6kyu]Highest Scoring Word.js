// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x) {
    let arr_en = ["", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newObj = {};
    let count = 0;
    let newArr = [];
    x.toLowerCase().split(" ").forEach((item) => {
        item.split("").map((letter) => {
            count += arr_en.indexOf(letter)
            return count
        })
        newObj[item] = count
        count = 0
    })
    Object.keys(newObj).forEach(key => {
        newArr.push(newObj[key])
        return newArr
    })
    const output = Object.keys(newObj).filter(key => newObj[key] === Math.max(...newArr))
    return output[0]
}
