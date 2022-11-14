function solution(start, finish) {
    let jumps = 0
      for(let i=start; i <= finish;){
        if(i == finish){
          return jumps
        }else if(i+3 <= finish){
          console.log('jump 3')
          i += 3
          jumps += 1
        }else{
          console.log('jump 1')
          i += 1
          jumps += 1
        }
      }
  }