// Return an array
function fizzbuzz(n){
    var fizzify = []
    for(let i = 1; i <= n; i++){
      if( i % 3 === 0 &&  i % 5 === 0){
        fizzify.push("FizzBuzz") 
      }else if(i % 3 === 0){
        fizzify.push("Fizz")
      }else if(i % 5 === 0){
        fizzify.push("Buzz")
      }else{
        fizzify.push(i)
      }
    }
    return fizzify
  }