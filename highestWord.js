// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.



function high(x){
    // Cut string up into array of words
    const wordCut = x.split(' ')
    // map over the words
    const scores = wordCut.map((word) => {
        // return an array from words       // add the value of each letter ASCII - 96
        return Array.from(word).reduce((holding, letter) => holding += (word.charCodeAt(word.indexOf(letter))- 96), 0)
    })
    // to get the highest word reduce scores to highest value
    let highestWord = scores.reduce((holding, word) => {
        return holding > word? holding : holding = word;
    }, 0)

    // return the word with the same index of highestWord in scores
    // because scores wasn't sorted index of words remains the same
    return wordCut[scores.indexOf(highestWord)]
  }

high('what time are we climbing up the volcano')