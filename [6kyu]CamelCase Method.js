// Write a method (or function, depending on the language) that converts a string to camelCase, 
// that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"



String.prototype.camelCase=function(){
  console.log(this)
    if(this.length === 0){return ""}
    return this.split(' ').map((item) => {
        let pattern = item[0].toUpperCase()
        return item.replace(item[0], pattern)
    }).join('')
}
