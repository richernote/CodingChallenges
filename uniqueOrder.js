// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

let uniqueInOrder = (iterable) => {
    // return an array of iterable filtering values that arent the same as the one
    // after it
    return [...iterable].filter((val, ind) => val !== iterable[ind + 1])
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))