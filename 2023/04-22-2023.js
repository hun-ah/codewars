// multiply two numbers and subtract 1 from the exponent
// => expression (like 28x^7)

function derive(c, e) {
   return `${c * e}x^${e - 1}`
}