// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;


function countSmileys(arr) {
return arr.filter(item => {
if (item.length === 3) {
return (
(item[0] === ':' || item[0] === ';') &&
(item[2] === ')' || item[2] === 'D') &&
(item[1] === '-' || item[1] === '~')
)
} else if (item.length === 2){
return (
(item[0] === ':' || item[0] === ';') &&
(item.includes(')') || item.includes('D'))
)
}

}).length;
}

//Best practeces:
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
