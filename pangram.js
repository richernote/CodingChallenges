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