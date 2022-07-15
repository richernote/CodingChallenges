// A pangram is a sentence that contains every single letter of the alphabet at least once.
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    const alphaIndex = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alphaIndex.map(e => String.fromCharCode(e))
  
    let hasAll = true
    
    alphabet.forEach(e => {
      if (!string.includes(e) && !string.includes(e.toLowerCase())) {
        hasAll = false
      }
    })
    
    return hasAll
}

isPangram("The quick brown fox jumped over the lazy dog")