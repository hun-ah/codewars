/* Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string" */

function repeatIt(str, n) {
   let repeated = []
   for (let i = 1; i <= n; i++) {
      repeated.push(str)
   }

   if (typeof str !== 'string') {
      return 'Not a string'
   } else {
      return repeated.join('')

   }
}