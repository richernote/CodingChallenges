// Compare two arrays. return the first array minus any value it shares with the
// second array


function arrayDiff(a, b) {
    // return a but filter for values that b doesn't have
    return a.filter(val => !b.includes(val))
  }

arrayDiff([1,2,3], [1,2])