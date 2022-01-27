function duplicateEncode(word){
    let newWord = "";
    let letters = word.toLowerCase().split('');
    for (let i = 0; i < letters.length; i++) {
        if(letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])){
            newWord += "(";
        } else {
            newWord += ")";
        }
    }
    return newWord
}
