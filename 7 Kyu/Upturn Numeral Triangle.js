function pattern(n){
    var output="";
   for (let i = 0; i < n; i++){
   output += " ".repeat(i + 1) + ((i + 1) % 10).toString().repeat(n - i).split('').join(' ')
     if(i < (n - 1)){
      output += "\n"
     }
   }
  return output;
 }