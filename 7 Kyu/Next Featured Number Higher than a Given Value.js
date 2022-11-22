function nextNumb(val) { 
    var nextNumber;
    var testNum;
    for(let i = val; i ++;){
      if (val > 99999999){
        return "There is no possible number that fulfills those requirements"
      }
      if (i % 2 != 0){
        if(i % 3 === 0){
          var count = 0 
          //if test number is odd and divisible by 3
          //check for number of same numbers. If that number is 0 get the next number
          testNum = String(i).split('')
          for(let k = 0; k < testNum.length; k++){
            for(let l = k + 1; l < testNum.length; l++){
              if(testNum[k] === testNum[l]){
                count++
              }
            }
          }
          if(count === 0){
            nextNumber = i
            return nextNumber
          }
          count = 0
        }
      }
    }
  }