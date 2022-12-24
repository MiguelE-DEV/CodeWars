function shortcut (string) {
    let arr = []
    arr = string.split('')
    console.log(arr)
    for(let i = 0; i < string.length; i++){
      if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
        arr[i] = ''
      }
    }
    return arr.join('');
  }