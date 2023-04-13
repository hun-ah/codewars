/* Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string. */

function padIt(str, n) {
   let arr = str.split('')
   let i = 0

   while (i < n) {
      i++
      if (i % 2 === 1) {
         arr.unshift('*')
      } else {
         arr.push('*')
      }
   }

   console.log(arr.join(''))

}