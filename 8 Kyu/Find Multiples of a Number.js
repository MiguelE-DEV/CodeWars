function findMultiples(integer, limit) {
    let multiples = []
    for(let i=0;i<=limit;i++){
      if(i%integer===0&i!=0){
        multiples.push(i)
      }
    }
    return multiples
  }