// PREP
// P: string of numbers ('1,2,3,4')
// R: new string with first and last characters removed
// E: '1,2,3' returns '2' / ' ' returns null / '1' returns null / '1,2' returns null

function array(str) {
   // take in a string of numbers
   // split the string by the commas
   // remove first and last elements
   // join by spaces
   let newStr = str.split(',')
   newStr.shift()
   newStr.pop()
   if (str === '' || str.length < 4) {
      return null
   } else {
      return newStr.join(' ')
   }
}