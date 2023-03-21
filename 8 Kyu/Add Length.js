function addLength(str) {
    let string = str.split(" ")
    return string.map(word => `${word} ${word.length}`)
  }