function purifyTheStratholme(s) {
    s = s.split('')
    console.log(s)
    for(let i = 0; i<s.length; i++){
      if(s[i] === 'i' || s[i] === 'I'){
        s[i] = ''
        s[i-1] = ''
        if(s[i+1] === 'i' || s[i+1] === 'I'){
          s[i+1] = s[i+1]
        }else{
         s[i+1] = '' 
        }
      }
    }
    for(let j = 0; j<s.length; j++){
      if(s[0] === ' '){
        s.shift()
      }else if(s[s.length -1] === ' '){
        s.pop()
      }
    }
    
    s.join('')
    
    if(s[0] === ' '){
      s[0] = ''
    }
    console.log(s)
    return s.join('')
  }