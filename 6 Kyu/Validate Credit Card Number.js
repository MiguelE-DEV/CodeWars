function validate(n){
    let arr = String(n).split('').map(str => Number(str))
    if(arr.length % 2 == 0){
      for(let i = 0;i<arr.length;i+=2){
        if(arr[i]*2>9){
          arr[i] += arr[i] -9
        }else{
          arr[i] += arr[i]
        }
      }
    }else{
      for(let i = 1;i<arr.length;i+=2){
        if(arr[i]*2>9){
          arr[i] += arr[i] -9
        }else{
          arr[i] += arr[i]
        }
      }
    }
    console.log(arr)
    let sum = 0
    for(let j=0;j<arr.length;j++){
      sum += arr[j]
    }
    console.log(arr)
    return sum %10 === 0
  }