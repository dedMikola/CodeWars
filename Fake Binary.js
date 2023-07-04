// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
    return Array.from(x.toString(), Number).reduce((arr, x) => {
         x >= 5 ? arr.push(1) : arr.push(0);
         return arr
    },[]).join("")
}
