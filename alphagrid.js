function grid(N) {
  if (N < 0)  return null;

  function compNum(num) {
    while (num >= 26) {
      num -= 26;
    }
    return num;
  }

  let layout = [];
  for (let i = 0; i < N; i++) {
    let subset = [];
    for (let x = 0; x < N; x++) {
      let char = compNum((i + x)) + 97
      subset.push(String.fromCharCode(char))
    }
    layout.push(subset.join(""))
  }

  return layout.join('\n')
}

console.log(grid(50))