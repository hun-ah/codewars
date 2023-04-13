/* This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned. */

function strCount(str, letter) {
   let letterCount = 0
   let strToArray = str.split('')
   for (let i = 0; i <= strToArray.length; i++) {
      if (strToArray[i] === letter)
         letterCount += 1
   }
   return letterCount
}