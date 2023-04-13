/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. */

function squareDigits(num) {
   return Number(num.toString().split('').map(e => e * e).join(''))
}

/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. */

String.prototype.toAlternatingCase = function () {
   return this.split('').map((e) => {
      if (e === e.toLowerCase()) {
         return e.toUpperCase()
      } else if (e === e.toUpperCase()) {
         return e.toLowerCase()
      }
   }).join('')
}