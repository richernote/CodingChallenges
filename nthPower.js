// Given and array and number N return array.at(n) ^ n
// if n is outside of the array return -1

function index(array, n){
  
    if(array[n] === undefined) {
      return -1
    }
    
    return Math.pow(array[n], n)
}

index([75,68,35,61,9,36,89,0,30], 10)