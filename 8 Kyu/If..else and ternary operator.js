function saleHotdogs(n){
    let saleHotdogs = 0
    if(n<5){
      saleHotdogs += n * 100
    }else if(n >= 5 && n < 10){
      saleHotdogs += n * 95
    }else if(n >= 10){
      saleHotdogs += n * 90
    }
    return saleHotdogs
  }
  