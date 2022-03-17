function isIsogram(str){
    return [...str].forEach(check => {
        console.log(str.map(check))
    })
}

  console.log(isIsogram("Dermatoglyphics"))