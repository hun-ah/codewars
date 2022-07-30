/* Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element. */

// PREP
// P: string
// R: each word in string as an array with its word length beside it
// E: 'apple ban' returns ['apple 5', 'ban 3']
// P:

function addLength(str) {
   // take in string
   // split each word in string into an array
   // get length of each element in the array
   return str.split(' ').map((e) => {
      return `${e} ${e.length}`
   })
}