function firstNonConsecutive (arr) {
    //Create a loop that iterates through the array
    //Compare each number in the index to the next number
    //When you reach a non consecutinve interger return the integer
    //If the whole array is consecutive return null
      for(let i= 0; i < arr.length - 1; i++){
        if(arr[i] + 1 !==  arr[i+1]){
          return arr[i+1]
        }
      }
      return null
    }