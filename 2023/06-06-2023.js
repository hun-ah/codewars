// PREP
// parameters: integer
// return: sum of all digits in the integer
// ie... input: 123 = output: 6

function sumDigits(number) {
  // separate each digit of number
  // convert to number
  // sum digits

  // Math.abs returns absolute val (will make the number postive)
  // split and use reduce with + to convert items in array back to Numbers
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, c) => +acc + +c, 0);
}

console.log(sumDigits(99));
console.log(sumDigits(10));
console.log(sumDigits(-32));
