// let romthirteen = (string) => {
//   let cut = string.split(" ")
//   const upperShift = (letter) => {
//     let num = letter.charCodeAt()
//     num + 13 >= 91 ? num -= 13 : num +=13
//     return String.fromCharCode(num)
//   }

//   const lowerShift = (letter) => {
//     let num = letter.charCodeAt()
//     num + 13 >= 123 ? num -= 13 : num += 13
//     return String.fromCharCode(num)
//   }

//   return cut.map((place) => {
//     let shift = []
//     for (let letters of place) {
//       !/[a-zA-z]/.test(letters) ?  shift.push(letters) :
//       (letters.toUpperCase() === letters ? shift.push(upperShift(letters)) : 
//       shift.push(lowerShift(letters)))
//     }
//     return shift.join('')
//   }).join(' ')
// }

const rom13 = (string) => {
  return string.replace(/[a-z]/gi,(place) => {
    return String.fromCharCode(place.charCodeAt() + (place.toUpperCase().localeCompare('M') > 0 ? -13 : 13))
  })
}

console.log(rom13('Ruby is coo;!'))