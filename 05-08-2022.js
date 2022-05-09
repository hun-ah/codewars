/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */

const areaOrPerimeter = function (l, w) {
   let area = l * w
   let perimeter = (l + w) * 2
   if (l === w) {
      return area
   } else {
      return perimeter
   }
}

/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir). */

function countBy(x, n) {
   let arr = []
   for (let i = 1; i <= n; i++) {
      arr.push(i)
   }
   return arr.map(e => e * x)
}