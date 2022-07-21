/* Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b. */

function arrayMadness(a, b) {
   let sumA = 0
   let sumB = 0
   for (let i = 0; i < a.length; i++) {
      sumA += Math.pow(a[i], 2)
   }
   for (let i = 0; i < b.length; i++) {
      sumB += Math.pow(b[i], 3)
   }

   return sumA > sumB ? true : false

}