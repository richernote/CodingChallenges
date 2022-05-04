// Find The Odd int
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    // create new obj with "number": count
    let b = A.reduce((obj, name) =>{
      obj[name] = obj[name]? obj[name] += 1 : obj[name] = 1;
      //return the object
      return obj}
                     ,{})
    
    // find the one with the odd count
    for (let odd in b) {
      if (b[odd] % 2 != 0){
        return Number(odd)
      }
    }
  }

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))