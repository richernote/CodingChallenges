// Codewars 'Data Reverse'
// A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed
// The total number of bits will always be a multiple of 8.

function dataReverse(data) {
    // create new array
    let box = []
    // remove 8 elements at a time and add them to box

    while (data.length) {
        box.unshift(data.slice(0, 8))
        data = data.slice(8)
    }
    // flatted nested array into one
    return box.flatMap(n => n);
  }


  const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

  dataReverse(data1);