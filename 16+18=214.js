function add(num1, num2) {
    let numStr1 = num1.toString().split('');
    let numStr2 = num2.toString().split('');

    if(numStr1.length < numStr2.length){
        while(numStr1.length < numStr2.length){
            numStr1.unshift(0);
        }
    } else if(numStr2.length < numStr1.length){
        while (numStr2.length < numStr1.length) {
            numStr2.unshift(0);
        }
    }

    let result = [];
    const maxLength = Math.max(numStr1.length, numStr2.length);
    for(let i = 0; i < maxLength; i++){
        result.push(+numStr1[i] + +numStr2[i]);
    }
    return +result.join('');
}

console.log(add(2, 11))