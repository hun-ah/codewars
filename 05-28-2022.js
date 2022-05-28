/* Given a number n, return the number of positive odd numbers below n, EASY! */

function oddCount(n) {
   let num = 0
   if (n % 2 === 1) {
      return Math.floor(n / 2)
   } else {
      if (n % 2 === 0) {
         return n / 2
      }
   }
}

// simplified even more... I wasn't thinking

const oddCount = n => Math.floor(n / 2)