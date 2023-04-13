/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest. */

function twoHighest(arr) {
   let a = arr.sort((a, b) => a - b)
   var filteredArray = a.filter(function (item, pos) {
      return a.indexOf(item) == pos;
   });
   return filteredArray.reverse().slice(0, 2)
}