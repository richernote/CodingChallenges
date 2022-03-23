function solution(input, markers) {
    // make array from string seperating at \n
    let lineByLine = input.split('\n')
    // make empty array to return later
    let minsString = []
    // function to return sliced value from 0 up to the marker character
    const markerChop = (marker, sentence) => {
      return sentence.slice(0, sentence.indexOf(marker)).trim()
    }
    
    // go through lineByLine
    lineByLine.forEach(sentence => {
        // if sentence doesn't contain either maker return push sentence to minsString
      if (!sentence.includes(markers[0]) && !sentence.includes(markers[1])) {
        minsString.push(sentence)
      } else {
          // check which marker the string has and remove it + everything after.
        markers.forEach(marker => {
          if (sentence.includes(marker)) minsString.push(markerChop(marker, sentence))
        })
      }
    })
    // return minsString joined back together with \n
    return minsString.join('\n')
}

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])