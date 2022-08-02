function howMuchILoveYou(nbPetals) {
    const once = (nbPetals % 6) - 1
    
    console.log(nbPetals%6)
    const love = [ 
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all"
    ]
    
    return once >= 0?  love[once] : love[5]
}


howMuchILoveYou(6)