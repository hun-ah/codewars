/* Find the sum of all multiples of n below m */

function sumMul(n, m) {
   let sum = 0
   for (let i = n; i <= m; i++) {
      if (i % n === 0) {
         sum += i
      }
   }
   if (sum < 1) {
      return 'INVALID'
   } else {
      return sum
   }
}