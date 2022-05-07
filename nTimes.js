// Delete occurrences of an element if it occurs more than n times Codewards Kata

// Given a list and a number, create a new list that contains each number of lst at most N times without
// reordering. For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take
// [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and
// then take 3, which leads to [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, the result would be [20,37,21]



function deleteNth(arr,n){
    let obj = {};
    let newArr = [];

    // cool way to do it ingore
    // console.log(arr.filter(e => (obj[e] = obj[e] + 1 || 1) <= n))
    
    // cycle over array
    arr.forEach(e => {
      // if obj has e ++ it
      if (obj.hasOwnProperty(e)){
        obj[e]++;
      } else /* Add it */{
        obj[e] = 1;
      }
      // if the count of e in obj is <= n add it to the new array.
      if(obj[e] <= n) {
        newArr.push(e);
      }
    })
    return newArr;
  }

deleteNth([22, 27, 27, 41, 41, 5, 22, 5, 5, 27, 27, 22, 27, 41, 5, 27, 5, 5, 41, 41, 41, 30, 22, 27, 27, 27, 30, 5, 3, 41, 3, 30, 41, 41, 27, 22, 27, 27, 27, 22, 22, 5, 27, 5, 27, 27, 30, 30, 22, 22, 27, 30, 5, 30, 41, 22, 27], 5);