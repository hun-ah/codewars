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

/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

var humanYearsCatYearsDogYears = function (humanYears) {
   let ages = []
   let catYears = 0
   let dogYears = 0

   ages.push(humanYears)

   if (humanYears === 1) {
      catYears += 15
      dogYears += 15
      ages.push(catYears, dogYears)
   }

   if (humanYears === 2) {
      catYears += 24
      dogYears += 24
      ages.push(catYears, dogYears)

   }

   if (humanYears > 2) {
      catYears += (humanYears - 2) * 4 + 24
      dogYears += (humanYears - 2) * 5 + 24
      ages.push(catYears, dogYears)

   }
   return ages
}

/* write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers. */

function stringy(size) {
   let binary = ''
   for (let i = 1; i <= size; i++) {
      if (i % 2 === 0) {
         binary += '0'
      } if (i % 2 === 1) {
         binary += '1'
      }
   }
   return binary
}