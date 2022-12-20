var humanYearsCatYearsDogYears = function(humanYears) {
    let years = [0,0,0]
    years[0] = humanYears 
      if(humanYears === 1){
        years[1] = 15
        years[2] = 15
      }else if(humanYears === 2){
        years[1] = 24
        years[2] = 24
      }else{
        years[1] = 24 + (4*(humanYears-2))
        years[2] = 24 + (5*(humanYears-2))
      }
    console.log(years)
    return years;
  }