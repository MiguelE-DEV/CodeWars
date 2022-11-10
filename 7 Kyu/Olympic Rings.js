function olympicRing(a){
    let count = 0
    let check = []
    let oneRing = 'aAbdDegoOpPqQR'
    let twoRing = 'B'
    for(let i=0;i<a.length;i++){
      check.push(a[i])
    }
    console.log(check)
    for(let i=0;i<a.length;i++){
       if(oneRing.includes(check[i])){
         count += 1 
       }else if(twoRing.includes(check[i])){
         count += 2
       }
    }
    count = Math.floor(count/2)
    console.log(count)
    if(count > 3){
      return 'Gold!'
    }else if(count == 3){
      return 'Silver!'
    }else if(count == 2){
      return 'Bronze!'
    }else{
      return 'Not even a medal!'
    }
  }