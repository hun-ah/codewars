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