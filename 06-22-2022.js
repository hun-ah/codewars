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