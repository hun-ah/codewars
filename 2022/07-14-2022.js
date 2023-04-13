// PREP (parameters, return, example, psuedo code)
// P: positive integer n
// R: array of positive integers from 1 to n (inclusive)
// E: n = 5, [1,2,3,4,5]
// P:

function preFizz(n) {
   // take in number n
   // loop through numbers 1 to n
   let i = 0
   let arr = []
   while (i < n) {
      i++
      arr.push(i)
   }
   // return an array
   return arr
}