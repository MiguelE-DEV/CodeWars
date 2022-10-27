function XO(str) {
    let numOfO = 0
    let numOfX = 0 
    str = str.toLowerCase()
    console.log(str)
    for(let i=0;i<str.length;i++){
        if(str[i] === 'o'){
          numOfO +=1
        }else if(str[i] === 'x'){
          numOfX +=1
        }
      }
    return numOfX === numOfO
  }