const xMarksTheSpot = (input) => {
  let xLocation = []
  let posA = 0
  let posB = 0
  let numOfX = 0
  for(let i=0;i<input.length;i++){
    for(let j=0;j<input[i].length;j++){
      if(input[i][j] === 'o'){
        posB += 1
      }else{
        numOfX += 1
        xLocation = [posA,posB]
      }
    }
    posB = 0
    posA += 1
  }
  if(numOfX > 1){
    xLocation = []
    return xLocation
  }
  return xLocation
}