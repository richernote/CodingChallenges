multiplicationTable = function(size) {
  // create an empty array to start
  const base = [];
  // do a for loop to count up to {size} and add each value
  for (let i = 1; i <= size; i ++) {
    base.push(i)
  }
 // make an array of arrays where each sucessive array is muliplied by
 // the next number in the first array
  return Array.from(base.map((a) => base.map((b) => a * b))
}



multiplicationTable(3)