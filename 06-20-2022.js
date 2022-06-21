/* We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it. */

const arr = n => {
   let array = []
   for (let i = 0; i < n; i++) {
      array.push(i)
   }
   return array
};

/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. */

function removeEveryOther(arr) {
   let filtered = arr.filter((e, i) => {
      if (i % 2 === 0) {
         return e
      }
   })
   return filtered
}