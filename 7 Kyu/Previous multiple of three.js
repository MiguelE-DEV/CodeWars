const prevMultOfThree = n => {
    if(n % 3 === 0){
      return n
    }else{
      let nTest = String(n).split('')
      let count = nTest.length
      for(let i= 0; i < count; i++){
        nTest.pop()
        console.log(nTest)
        if(Number(nTest.join('')) % 3 === 0){
          if(nTest.length === 0){
            return null
          }
          return Number(nTest.join(''))
        }
      }
    }
  }