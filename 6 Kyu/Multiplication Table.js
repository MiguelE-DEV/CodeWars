multiplicationTable = function(size) {
    let table = []
    for(z=1;z<=size;z++){
      let arr = []
      for(i=1; i <= size; i++){
        arr.push(i)
      }
      for(y=0;y<size;y++){
          arr[y] = arr[y] * z
      }
    table.push(arr)
    }
    return table
  }