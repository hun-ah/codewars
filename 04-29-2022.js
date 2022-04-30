/*Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list. */

var min = function (list) {
   return Math.min(...list)
}

var max = function (list) {
   return Math.max(...list)
}

/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

 */

function find_average(array) {
   if (array.length === 0) {
      return 0
   }
   let average = array.reduce((a, c) => a + c, 0) / array.length
   return average
}