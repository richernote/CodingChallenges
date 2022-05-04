// Equal Sides Of An Array

// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum of the integers to the left of N 
// is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.


function findEvenIndex(arr) {
    // Function to find sum of array
    function reduction(ray) {
      return ray.reduce((prev, current) => prev += current)
    }

    for (let i = 0; i < arr.length - 1; i++) {
      // left of i
      let left = arr.slice(0, i);
      // right of i
      let right = arr.slice(i + 1);
  
      if (reduction(arr.slice(1)) === 0) {
          return 0;
      }

      if (reduction(left) == reduction(right)){ 
        console.log(left, right);
        return i;     
      }  
    }
    
    return -1;
}