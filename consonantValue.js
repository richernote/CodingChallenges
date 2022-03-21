function solve(s) {
    // split string into array at any letter match a,e,i,o,u
    const letterGroups = s.split(/[aeiou]/);
    
    return letterGroups.reduce((previous, current) => wordValue(current) > previous ? wordValue(current) : previous, 0)

    function wordValue(word) {
    // Return and array from word reducing values down by adding together their ASCI values - 96
      return Array.from(word).reduce((holding, letter) => holding += (word.charCodeAt(word.indexOf(letter))- 96), 0)
    }
    console.log(values)
  };