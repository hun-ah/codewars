/* The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times). */

function numberToPower(number, power) {
   let sum = 1
   for (let i = 1; i <= power; i++) {
      sum *= number
   }
   console.log(sum)
}