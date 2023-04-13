/* Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop! */

function createArray(number) {
   var newArray = [];

   for (var counter = 1; counter <= number; counter++) {
      newArray.push(counter);
   }

   return newArray;
}

/* You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail). */

function fixTheMeerkat(arr) {
   let firsElement = arr.shift()
   let lastElement = arr.pop()
   arr.unshift(lastElement)
   arr.push(firsElement)
   return arr
}