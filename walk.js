// function isValidWalk(walk) {
//     let coordinance = {'long': 0, 'wide': 0}
//     if (walk.length != 10){
//       return false
//     } else {
//       let trip = walk.forEach((direction)=> {
//           switch (direction) {
//                 case 'n':
//                     coordinance.long += 1;
//                     break;
//                 case 's':
//                     coordinance.long -= 1;
//                     break;
//                 case 'w':
//                     coordinance.wide -= 1;
//                     break;
//                 case 'e':
//                     coordinance.wide += 1;
//           }
//       })
//     }
//     return coordinance.long === 0 && coordinance.wide === 0 ? true: false
// }

function isValidWalk(walk) {
    let count = (current) => walk.filter(direction => {
        return direction == current
    }).length
    return walk.length == 10 && count('n') === count('s') && count('w') === count('e')
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))