// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
    let arrStr = str.split("");
    let newStr = [];
    arrStr.forEach(element => newStr.push((element.repeat(2))));
    return newStr.join("")
}
