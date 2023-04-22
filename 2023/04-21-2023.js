// length of arc A
//  => area of square rounded to two decimals

function squareArea(A) {
   // calculate radius by finding circumference and dividing by 2 * Math.PI
   let radius = (A * 4) / (2 * Math.PI)
   // find radius (radius^2)
   let area = radius * radius
   // round to 2 decimals
   return Number(area.toFixed(2))
}

console.log(squareArea(2), 1.62)
console.log(squareArea(0), 0)
console.log(squareArea(14.05), 80)

// check if not a letter => -1
// check for same case => 1
// check if letter => 0
// A-Z = 65-90
// a-z = 97-122
function sameCase(a, b) {
   let nums = []
   for (let i = 65; i <= 122; i++) {
      nums.push(i)
   }
   nums.splice(nums.indexOf(91), 6)

   let result

   if (nums.includes(a.charCodeAt(0)) && nums.includes(b.charCodeAt(0))) {
      result = 0
   } else {
      result = -1
   }

   if ((a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) && (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90) || (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) && (b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122)) {
      result += 1
   }

   return result
}

console.log(sameCase('C', 'B'), 1)
console.log(sameCase('b', 'a'), 1)
console.log(sameCase('c', 'B'), 0)
console.log(sameCase('H', ':'), -1)