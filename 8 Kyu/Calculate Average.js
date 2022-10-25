function findAverage(array) {
    let average = 0
    if(array.length === 0){
      return 0;
    }else{
      for(i=0; i<array.length; i++){
      average += array[i]}
      average = average/array.length
      return average
    }
  }