/* Return the Nth Even Number */

function nthEven(n) {
   return (n - 1) * 2
}

/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

 */

const squareOrSquareRoot = a => {
   return a.map(e => Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : e * e)
}