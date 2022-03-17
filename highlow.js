function highAndLow(numbers){
    const sorted = numbers.split(' ').map(Number);
    return `${Math.max(...sorted)} ${Math.min(...sorted)}`
  }

  highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");