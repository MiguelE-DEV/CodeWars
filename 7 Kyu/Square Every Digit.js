function squareDigits(num){
    let numSq = []
    for(let i =0; i < String(num).length; i++){
      numSq.push(Math.pow(parseInt(String(num).split('')[i]), 2))
    }
    return parseInt(numSq.join(''))
  }