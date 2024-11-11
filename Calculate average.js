// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.


const findAverage = array => array.reduce((accum, item) => accum += item, 0)/ array.length || 0
