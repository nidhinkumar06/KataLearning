function digital_root(n) {
    if (n > 9) {
      return sumDigits(n);
    } else {
      return n;
    }
}


function sumDigits(n) {
 let result = n.toString(10).split("").map(Number).reduce((x,y) => x+y);
 if (result > 9) { 
   sumDigits(result) 
 } else {
   return result;
 }
}

digital_root(3485);