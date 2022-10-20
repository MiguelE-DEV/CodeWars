// Sum Numbers
function sum (numbers) {
    "use strict";
    let result = 0
    if(numbers.length === 0){
      console.log(result)
      return result
    }else{
      for(let i = 0; i < numbers.length; i++){
      result += numbers[i]
      console.log(result)
      }    
      return result
    }
};