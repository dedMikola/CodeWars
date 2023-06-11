// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]


function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((accum, item)=>{
        if(item === true){
            accum +=1;
        }
        return accum
    },0)
}

//Best practices:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
