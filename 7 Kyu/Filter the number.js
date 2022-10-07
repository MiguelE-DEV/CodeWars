var filterString = function(value) {
    let filtered = []
    let valueArr = value.split('')
   
    for(let i = 0; i < value.length; i++){
    
      if (value.charAt(i) == Number(value.charAt(i))){ 
          filtered.push(value.charAt(i))
       }
     
      console.log(filtered)
  
    }
   
    return parseFloat(filtered.join(''))
  }