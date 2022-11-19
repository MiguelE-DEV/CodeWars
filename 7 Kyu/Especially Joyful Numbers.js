function numberJoy(n) {
    let sum = 0
    let arr = n.toString().split('') 
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
      sum += Number(arr[i])
    }
    return Number(sum.toString().split('').reverse().join('')) * sum === n
  }