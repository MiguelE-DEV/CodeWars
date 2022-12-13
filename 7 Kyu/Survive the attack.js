function hasSurvived(attackers, defenders){
    let attPts = 0
    let attDmg = 0
    let defPts = 0
    let defDmg = 0
    console.log(attackers,defenders)
  if(attackers.length === defenders.length){
    for(let i = 0; i<defenders.length; i++){
      if(attackers[i] < defenders[i]){
        defPts++
      }else if(attackers[i] > defenders[i]){
        attPts++
      }
    }
    console.log(attPts,defPts)
  }
    
    if(attackers.length > defenders.length){
    for(let i = 0; i<defenders.length; i++){
      if(attackers[i] < defenders[i]){
        defPts++
      }else if(attackers[i] > defenders[i]){
        attPts++
      }
    }
      attPts += attackers.length - defenders.length
      console.log(attPts,defPts)
  }
    
    if(attackers.length < defenders.length){
    for(let i = 0; i<attackers.length; i++){
      if(attackers[i] < defenders[i]){
        defPts++
      }else if(attackers[i] > defenders[i]){
        attPts++
      }
    }
      defPts += defenders.length - attackers.length
      console.log(attPts,defPts)
  }
    
    if(attPts === defPts){
      for(let i = 0; i< defenders.length; i++){
        defDmg += defenders[i]
      }
      for(let i = 0; i< attackers.length; i++){
        attDmg += attackers[i]
      }
      return defDmg >= attDmg
    }else{
      return defPts > attPts
    }
  }