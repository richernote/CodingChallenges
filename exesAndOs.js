// Exes and Ohs 7kyu
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

const XO = (str) => {
    // find matches for all the X and O
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    // (x && x.length) gives the falsy value or if no falsy value gives the length
    // return if both null or length or not
    return (x && x.length) === (o && o.length)
  }

  console.log(XO('Xxoxoxoo'))