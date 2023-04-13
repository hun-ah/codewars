/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

 */

function powersOfTwo(n) {
   let arr = []
   for (let i = 0; i <= n; i++) {
      arr.push(Math.pow(2, i))
   }
   return arr
}

/* You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0. */

function index(array, n) {
   let result = -1
   for (let i = 0; i < array.length; i++) {
      if (!array[n]) {
         result
      } else {
         result = Math.pow(array[n], n)
      }
   }
   return result
}
