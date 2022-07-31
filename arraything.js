// the array given represents tower heights. You can add one floor at a time. To get the 
// towers to be only 1 floor taller or shorter than the next what is the minimum number
// of floors you have to add to make the array be all ascending or decending in value?



function solution(arr) {

    const max = Math.max(...arr)

    let forwardCount = 0;

    let backwardCount = 0;

    const diffDec = arr.map((el, ind) => {
        backwardCount +=(arr.indexOf(max) - ind) + max - el
        return (arr.indexOf(max) - ind) + max
    })
   

    const diffAc = arr.map((el, ind) => {
        forwardCount += max - (arr.indexOf(max) - ind) - el
        return max - (arr.indexOf(max) - ind)
    })


// console.log(arr, `\n Acc: ${diffAc}`, forwardCount)
// console.log(arr, `\n dec: ${diffDec}`, backwardCount)

console.log(forwardCount < backwardCount ? forwardCount: backwardCount)
}



solution([1,4,3,2])
solution([5, 7, 9, 4, 11])