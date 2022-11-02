function vowelOne(s){
    s = s.toLowerCase()
    let vOne = s.split('')
    console.log(vOne)
    for(let i=0;i<s.length;i++){
      if(s[i]==='a'|| s[i]==='e'|| s[i]==='i'|| s[i]==='o'||s[i]==='u'){
        vOne[i] = '1'
      }else{
        vOne[i] = '0'
      }
    }
    vOne = vOne.join('')
    return vOne
  }