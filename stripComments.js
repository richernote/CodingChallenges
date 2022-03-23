function solution(input, markers) {
    let lineByLine = input.split('\n')
    let minsString = []
    const markerChop = (marker, sentence) => {
      return sentence.slice(0, sentence.indexOf(marker)).trim()
    }
    
    lineByLine.map(sentence => {
      if (!sentence.includes(markers[0]) && !sentence.includes(markers[1])) {
        minsString.push(sentence)
      } else {
        markers.forEach(marker => {
          if (sentence.includes(marker)) minsString.push(markerChop(marker, sentence))
        })
      }
  
    })
    return minsString.join('\n')
}

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])