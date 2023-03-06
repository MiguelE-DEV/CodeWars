function reverseWords(str) {
    let rStr = str.split(" ")
    let rWord = ''
    rStr.forEach((word)=>{
      for(let i = word.length -1 ;i >= 0; i--){
        rWord += word[i]
      }
      rWord += ' '
    })
    
    //remove extra space at the end
    rWord = rWord.slice(0, rWord.length - 1)
    
    return rWord
  }