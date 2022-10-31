function betterThanAverage(classPts, myPts) {
    let classSum = 0
    for(let i=0;i<classPts.length;i++){
      classSum += classPts[i]
    }
    return (classSum + myPts)/(classPts.length + 1) < myPts
  }