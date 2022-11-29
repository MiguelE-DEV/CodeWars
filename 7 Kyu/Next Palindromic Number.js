function nextPal(val) {
    for(let i = val + 1; i++;){
      if(String(i).split('').join('') === String(i).split('').reverse().join('')){
        return i
      }
    }
  } 