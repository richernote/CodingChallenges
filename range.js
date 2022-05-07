// Write a functions that returns an array of integers and ranges
// a range must span at least 3 numers and is denoted by '-'
// ex. [-10--8,-6,-3-1,3-5,7-11,14,15,17-2]


function solution(list){
    // function to return the range as a string if > 2 or both numbers if not
    function thisOrThat(el){
      return holder.length > 2? `${holder[0]}-${holder[holder.length - 1]}`
                      : holder;
    }
    
    let newList = [];
    let holder = [];
    
    list.forEach((el, ind) => {
        if((Math.max(...holder) + 1 == el) || (holder.length == 0)) {
          holder.push(el);
        } else {
         newList.push(thisOrThat(el))
          holder = [el];
        }
        // if index is the last
        if (ind == list.length - 1) {
          newList.push(thisOrThat(el))
        }
    })
    
    return [].concat(...newList).join(',')
  }

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))