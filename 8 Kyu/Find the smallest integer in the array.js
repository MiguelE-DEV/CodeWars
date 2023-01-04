class SmallestIntegerFinder {
    findSmallestInt(args) {
      let lowest = args[0]
      for(let i = 0; i < args.length; i++){
        if(args[i] <= lowest ){
           lowest = args[i]
           }
      }return lowest
    }
  }