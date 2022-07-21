// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
//and returns the same string with all even indexed characters in each 
//word upper cased, and all odd indexed characters in each word lower cased.


// break string into array of words
// map over the letters in the words using toUpperCase on all the even letters

function toWeirdCase(string){
  
    let newString = ''
    
    const newArray = string.split(" ").map(word => {
        return word.split("").map((e, i) => {
         return i % 2 === 0 ? e.toUpperCase() : e 
        }).join('')
      })
    
      
    return newArray.join(' ')
    
  }


  toWeirdCase("This code was written by me!")