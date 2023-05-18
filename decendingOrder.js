function descendingOrder(n){
    const ordered = String(n)
      .split('')
      .sort((a, b) => b -a)
      .join('')
    
    return Number(ordered)
    
  }