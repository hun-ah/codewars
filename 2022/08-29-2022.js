/* Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

Same as yesterday, remembered the solution. Still trying to figure out exactly why this answer worked but I think I mostly get it. 
*/

function array(str) {
   return str.split(',').slice(1, -1).join(' ') || null
}