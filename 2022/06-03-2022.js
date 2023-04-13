/* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.First argument is an array of numbers and the second is the divisor. */

function divisibleBy(numbers, divisor) {
   let evenNums = []
   numbers.forEach(n => {
      if (n % divisor === 0) {
         evenNums.push(n)
      }
   })
   return evenNums
}