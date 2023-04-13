/* In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string. */

function toFreud(string) {
   if (string === '') {
      return ''
   } else if (string.length > 0) {
      return string.split(' ').map(word => 'hello').join(' ')
   }
}