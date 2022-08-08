/* Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b. */

function closeCompare(a, b, margin) {
   if (margin >= Math.abs(a - b)) {
      return 0
   } else if (a > b) {
      return 1
   } else if (a < b) {
      return -1
   } else {
      return 0
   }
}