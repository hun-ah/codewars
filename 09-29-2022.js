/* Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

 */

function bigToSmall(arr) {
   return [].concat(...arr).sort((a, b) => a - b).reverse().join('>')
}