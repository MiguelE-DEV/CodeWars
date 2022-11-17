const getPositions = s => {
    let p1 = 0
    let p2 = 0
    let p3 = 0
    s = s % 27
    for(let i = 1; i<s+1; i++){
      p1++
      if(p1 === 3){
        p1=0
        p2++
        if(p2 === 3){
          p2 = 0
          p3++
          if(p3 === 3){
            p3 = 0
          }
        }
      }
    }
    return [p1,p2,p3]
  }