// Task
// Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.
// Worked Example
// ("he headed to the store", "h", "e") ➞ True

// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True

// ('abcdee', 'e', 'e') ➞ False

// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False


const bestFriend = (txt, a, b) => !txt.split('').some((item, index) => item === a && txt[index+1] !==b)
