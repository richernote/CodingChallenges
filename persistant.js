function persistence(num) {
    let counter = 0
 
    const recur = (num) => {
        while (num >= 10){
            num = String(num).split('').reduce((col, cur) => col *= cur)
            counter ++;
        }
    }

    recur(num)
}

 persistence(25)