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

/* You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number. */

function getAge(inputString) {
   return Number(inputString[0])
}