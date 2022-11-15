function spoonerize(words) {
    let first = words[0]
    let spoon = []
    for(let i=0; i<words.length;i++){
      spoon.push(words[i])
      if(words[i] === ' '){
        let second = words[i+1]
        spoon[i+1] = first
        spoon[0] = second
        i += 1
      }
    }
      return spoon.join('')
  }