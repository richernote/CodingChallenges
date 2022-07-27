// Make a function that returns a string where all the letters are doubled

function doubleChar(str) {
    let double = []
    
    for(let letter of str) {
      double.push(letter)
      double.push(letter)
    }
    
    return double.join('') 
}


  doubleChar("Adidas")  