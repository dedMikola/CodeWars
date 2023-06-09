// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples:

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let arrStr = str.split(" ");
    const arr1 = [];
    arrStr.map((item) => {
        arr1.push(item.split("").reverse().join(""));
    })
    return arr1.join(" ");
}
