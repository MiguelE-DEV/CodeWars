function derive(coefficient,exponent) {
    let num = coefficient * exponent
    let y = exponent - 1
    return `${num}x^${y}`
  }