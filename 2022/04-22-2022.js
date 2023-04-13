/* Complete the solution so that it reverses all of the words within the string passed in. */

const reverseWords = str => str.split(' ').reverse().join(' ')

/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string. */

function fakeBin(x) {
   let arr = x.split('')
   return arr.map(i => (i < 5) ? '0' : '1').join('')
}