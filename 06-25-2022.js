/* Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word. */

function findLongest(str) {

   let spl = str.split(" ");
   let longest = 0

   for (let i = 0; i <= spl.length - 1; i++) {
      if (spl[i].length > longest) {
         longest = spl[i].length
      }
   }
   return longest
}

/* Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise. */

function xor(a, b) {
   if (a === b) {
      return false
   } else {
      return true
   }
}

/* Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value. */

function getChar(c) {
   return String.fromCharCode(c)
}