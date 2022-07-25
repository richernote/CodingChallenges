function solution(s1, s2) {
    let firstObj = count(s1)
    let secontObj = count(s2)
    
    const merged = (s1, s2) => {
        
        const newWord = new Array();
        
        let s1I = 0;
        let s2I = 0;
        
        const nS1 = s1.split('')
        const nS2 = s2.split('')
        
        const length = s1.length + s2.length
        
        for(let i = 0; i < length; i++) {
               
            const firstletter = nS1[s1I]
            const secondletter = nS2[s2I]
            
            if((firstObj[firstletter] < secontObj[secondletter]) || !secondletter) {
                newWord.push(firstletter)
                s1I ++
            } else if((firstObj[firstletter] > secontObj[secondletter]) || firstletter == undefined) {
                newWord.push(secondletter)
                s2I ++
            } else if(firstObj[firstletter] == secontObj[secondletter]) {
                if(firstletter > secondletter) {
                    newWord.push(secondletter)
                    s2I++
                } else {
                    newWord.push(firstletter)
                    s1I++
                }
                
            }
        }
        
        return newWord.join('')
         
    }
    
    console.log(firstObj)
    console.log(secontObj)
    
    return merged(s1, s2)
}

function count(string) {
    
    return string.split('').reduce((col, cur) => {
        col[cur] = col[cur]? col[cur] += 1 : col[cur] = 1
        
        return col
    }, {})
    
}