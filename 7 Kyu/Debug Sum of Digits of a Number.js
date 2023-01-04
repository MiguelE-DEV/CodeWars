function getSumOfDigits(integer) {
  var sum = 0;
  var digits = String(integer)
    .split("")
    .map((str) => Number(str));
  console.log(digits);
  for (var ix = 0; ix < digits.length; ix++) {
    sum += digits[ix];
    console.log(digits[ix]);
  }
  console.log(sum);
  return sum;
}
