function dataReverse(data) {
    let box = []
    let i = 0;
    let newData = data
    while (i < newData.length) {
     box.push(data.slice(0, 8))
     newData = newData.slice(8)
      i++
    }
    
    console.log(box)
  }


  const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

  dataReverse(data1);