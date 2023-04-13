/* Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained */

function expressionMatter(a, b, c) {
   let optionA = a * b * c
   let optionB = a + b + c
   let optionC = a * b + c
   let optionD = a + b * c
   let optionE = (a + b) * c
   let optionF = a + (b * c)
   let optionG = (a * b) + c
   let optionH = a * (b + c)

   let optionList = [optionA, optionB, optionC, optionD, optionE, optionF, optionG, optionH]

   let highest = optionList.sort((a, b) => (a - b)).pop()

   return highest
}

/* Create a method to see whether the string is ALL CAPS.

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function () {
   let answer = true
   this.split('').forEach(e => {
      if (e === e.toUpperCase() || e === '') {
         answer
      } else {
         answer = false
      }
   })
   return answer
}