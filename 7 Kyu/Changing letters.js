function swap (string) {
    let upperCase = []
    for(let i=0;i<string.length;i++){
      if(string[i] == 'a'||string[i] == 'e'||string[i] == 'i'||string[i] == 'o'||string[i] == 'u'){
        console.log(string[i].toUpperCase())
        upperCase.push(string[i].toUpperCase())
      }else{
        console.log(string[i])
        upperCase.push(string[i])
      }
    }
    return upperCase.join('');
  }