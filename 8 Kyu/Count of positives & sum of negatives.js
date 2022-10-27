function countPositivesSumNegatives(input) {
    let count = [0,0]
    if (input === null){
      return count = []
    }
    if(input.length === 0){
      return count = []
    }
    for(i=0;i<input.length;i++){
      if(input[i]>0){
        count[0] += 1
      }else if(input[i]<0){
        count[1] += input[i]
      }
    }
    console.log(count)
    return count
  }