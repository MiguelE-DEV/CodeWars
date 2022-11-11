function removeExclamationMarks(s) {
    let newS = s.split('')
    console.log(newS)
    for(let i=0; i< newS.length; i++){
      if(newS[i] === '!'){
        newS[i] = ''
      }
    }
    return newS.join('')
  }