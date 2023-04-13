/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters. */

function uniTotal(string) {
   let total = 0
   string.split('').map(letter => total += letter.charCodeAt(0))
   return total
}