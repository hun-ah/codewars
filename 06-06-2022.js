/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

 */

function between(a, b) {
   let nums = []
   for (let i = a; i <= b; i++) {
      nums.push(i)
   }
   return nums
}

/* In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position. */

function move(position, roll) {
   return position + roll * 2
}