/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
   let strToArray = str.split('')
   let numOfVowels = 0
   strToArray.filter(e => {
      if (e === 'e') {
         numOfVowels += 1
      } if (e === 'a') {
         numOfVowels += 1
      } if (e === 'i') {
         numOfVowels += 1
      } if (e === 'o') {
         numOfVowels += 1
      } if (e === 'u') {
         numOfVowels += 1
      }
   })
   return numOfVowels
}