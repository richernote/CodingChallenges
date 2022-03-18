// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count (string) {  
    const letterCount = {};
    [...string].forEach(val => letterCount.hasOwnProperty(val) ? letterCount[val] += 1 : letterCount[val] = 1)
    return letterCount;
  }

 count('onomatopoeia')