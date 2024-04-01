Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.


const remainder = (n, m) => Math.max(...[n, m]) % Math.min(...[n, m])
