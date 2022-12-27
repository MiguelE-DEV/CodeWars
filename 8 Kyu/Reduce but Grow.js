function grow(x){
    let start = 1
    let y = x.reduce((a,c)=> a*c, start)
    console.log(y)
    return y
  }