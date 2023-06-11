// Complete the solution so that the function will break up camel casing, using a space between words.

// Example:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let newArr = [];
    string.split("").map((item)=>{
        if(item === item.toUpperCase()){
            newArr.push(" " + item)
        } else{
            newArr.push(item)
        }
    })
    return newArr.join("")
}

// Best practices:
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
