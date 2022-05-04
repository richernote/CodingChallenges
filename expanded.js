// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'


function expandedForm(num) {
    // turn number into array
    let expanded = num.toString().split('');
    let count = expanded.length;

    expanded.forEach(e => {
        count --;
        expanded[expanded.indexOf(e)] = e * Math.pow(10, count);
    })
    // filter out values of 0;
    return expanded.filter(e => e > 0).join(" + ")
}

  console.log(expandedForm(1048375076))