/* You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

 ************************************************

Re-visited this codewars and made more headway this time, still had to look at solutions. Will attempt again tomorrow with fresh eyes and see if I remember how the solution works  */

function array(str) {
   let newStr = str.split(',')
   newStr.pop()
   newStr.shift()
   return newStr.join(' ') || null
}
