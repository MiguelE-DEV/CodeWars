function phoneWords(stringOfNums) {
  let string = []
  for(let i = 0; i<stringOfNums.length; i++){
    //0space
    if(stringOfNums[i] === '0'){
      string.push(' ')
    //abc
    }else if(stringOfNums[i] === '2' && stringOfNums[i+1] === '2' && stringOfNums[i+2] === '2'){
      string.push('c')
      i += 2
    }else if(stringOfNums[i] === '2' && stringOfNums[i+1] === '2' ){
      string.push('b')
      i += 1
    }else if(stringOfNums[i] === '2'){
      string.push('a')
    }
    //3def
    else if(stringOfNums[i] === '3' && stringOfNums[i+1] === '3' && stringOfNums[i+2] === '3'){
      string.push('f')
      i += 2
    }else if(stringOfNums[i] === '3' && stringOfNums[i+1] === '3' ){
      string.push('e')
      i += 1
    }else if(stringOfNums[i] === '3'){
      string.push('d')
    }
    //4ghi
    else if(stringOfNums[i] === '4' && stringOfNums[i+1] === '4' && stringOfNums[i+2] === '4'){
      string.push('i')
      i += 2
    }else if(stringOfNums[i] === '4' && stringOfNums[i+1] === '4' ){
      string.push('h')
      i += 1
    }else if(stringOfNums[i] === '4'){
      string.push('g')
    }
    //5jkl
    else if(stringOfNums[i] === '5' && stringOfNums[i+1] === '5' && stringOfNums[i+2] === '5'){
      string.push('l')
      i += 2
    }else if(stringOfNums[i] === '5' && stringOfNums[i+1] === '5' ){
      string.push('k')
      i += 1
    }else if(stringOfNums[i] === '5'){
      string.push('j')
    }
    //6mno
    else if(stringOfNums[i] === '6' && stringOfNums[i+1] === '6' && stringOfNums[i+2] === '6'){
      string.push('o')
      i += 2
    }else if(stringOfNums[i] === '6' && stringOfNums[i+1] === '6' ){
      string.push('n')
      i += 1
    }else if(stringOfNums[i] === '6'){
      string.push('m')
    }
    //7pqrs
    else if(stringOfNums[i] === '7' && stringOfNums[i+1] === '7' && stringOfNums[i+2] === '7' && stringOfNums[i+3] === '7'){
      string.push('s')
      i += 3
    }else if(stringOfNums[i] === '7' && stringOfNums[i+1] === '7' && stringOfNums[i+2] === '7' ){
      string.push('r')
      i += 2
    }else if(stringOfNums[i] === '7' && stringOfNums[i+1] === '7'){
      string.push('q')
      i += 1
    }else if(stringOfNums[i] === '7'){
      string.push('p')
    }
    //8tuv
    else if(stringOfNums[i] === '8' && stringOfNums[i+1] === '8' && stringOfNums[i+2] === '8'){
      string.push('v')
      i += 2
    }else if(stringOfNums[i] === '8' && stringOfNums[i+1] === '8' ){
      string.push('u')
      i += 1
    }else if(stringOfNums[i] === '8'){
      string.push('t')
    }
    //9wxyz
    else if(stringOfNums[i] === '9' && stringOfNums[i+1] === '9' && stringOfNums[i+2] === '9' && stringOfNums[i+3] === '9'){
      string.push('z')
      i += 3
    }else if(stringOfNums[i] === '9' && stringOfNums[i+1] === '9' && stringOfNums[i+2] === '9' ){
      string.push('y')
      i += 2
    }else if(stringOfNums[i] === '9' && stringOfNums[i+1] === '9'){
      string.push('x')
      i += 1
    }else if(stringOfNums[i] === '9'){
      string.push('w')
    }
  }
  return string.join('')
}