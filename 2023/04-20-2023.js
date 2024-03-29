// given total # of rows/columns in theatre and accounting for the the row/column I am in...
//  => # of ppl sitting directly behind me & to the left

// inputs: total # of rows & columns in the theatre
// inputs: row and column I am in

function seatsInTheater(nCols, nRows, col, row) {
   // total = 176 seats
   // people to my right: nCols - (col - 1) = 12 seats
   // people behind me: nRows - row = 8 sets
   // return 8 * 12
   return (nCols - (col - 1)) * (nRows - row)
}

console.log(seatsInTheater(16, 11, 5, 3), 96)
console.log(seatsInTheater(1, 1, 1, 1), 0)
console.log(seatsInTheater(13, 6, 8, 3), 18)
console.log(seatsInTheater(60, 100, 60, 1), 99)
console.log(seatsInTheater(1000, 1000, 1000, 1000), 0)

function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
   return name === 'Santa Claus' && password === 'Ho Ho Ho!'
};

let sleigh = new Sleigh
console.log(sleigh.authenticate('bob', '123'))
console.log(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!'))


// array of positive or negative integers
//    => sum diff between consecutive pairs in descending order
// Ex: [2, 1, 10] ...[10, 2, 1] => (10 - 2) + (2 - 1) = 8 + 1 = 9
function sumOfDifferences(arr) {
   let total = 0
   const sorted = arr.sort((a, b) => b - a)
   for (let i = 0; i < sorted.length - 1; i++) {
      total += sorted[i] - sorted[i + 1]
   }
   return total
}

console.log(sumOfDifferences([2, 1, 10]), 9)
console.log(sumOfDifferences([-3, -2, -1]), 2)
console.log(sumOfDifferences([9, 100, 34, 5, 22, 1]), 99)