// // multiply two numbers and subtract 1 from the exponent
// // => expression (like 28x^7)

// function derive(c, e) {
//    return `${c * e}x^${e - 1}`
// }

// quantity of mangos & price per mango
//  => total cost
// (2,3) => 6 || (5,3) => 12

function mango(quantity, price) {
   // for every multiple of 3, subtract 1 
   // how many times quantity is divisible by 3?

   return (quantity - Math.floor(quantity / 3)) * price
}

console.log(mango(2, 3), 6)
console.log(mango(3, 3), 6)
console.log(mango(9, 5), 30)
console.log(mango(5, 3), 12)