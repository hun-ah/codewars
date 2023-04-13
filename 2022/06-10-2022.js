/* Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
   let reverse = x.split('').reverse().join('').toLowerCase()
   if (x.toLowerCase() === reverse.toLowerCase()) {
      return true
   } else {
      return false
   }
}