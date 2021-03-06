/* The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down. */

function dutyFree(normPrice, discount, hol) {
   return Math.floor(hol / (normPrice * discount / 100))
}

/* Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included). */

function pipeFix(numbers) {
   let arr = []
   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      arr.push(i)
   }
   return arr
}

/* If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue. */

function warnTheSheep(queue) {
   for (let i = queue.length - 1; i >= 0; i--) {
   }
   if (queue.indexOf('wolf') === queue.length - 1) {
      return 'Pls go away and stop eating my sheep'
   } else {
      return `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
   }

}