function disemvowel(str) {
    var newStr = []
    var vowel = 'aeiouAEIOU'
    for(let i=0; i<str.length; i++){
      const ch = str[i]
  //     if(!(str[i] == 'a'|| str[i] == 'e'|| str[i] == 'i'|| str[i] == 'o'|| str[i] == 'u')){
      if (!vowel.includes(ch)){
        newStr.push(str[i])
      }
    }
    return newStr.join('');
  }