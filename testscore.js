function checkExam(array1, array2) {  
    // return an array of 1s and 0s, 1 if the currentValue
    // is equal to the value at array2[index] 
    return array1.map((currentValue, index) => {
        return array2[index] === '' ? 0 : currentValue === array2[index] ? 4 : -1
    }).reduce((a, b) => a + b)
}


checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])