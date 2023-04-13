/* Return a new array consisting of elements which are multiple of their own index in input array (length > 1). */

function multipleOfIndex(array) {
   let multiples = []
   array.forEach((e, i) => {
      if (e % i === 0) {
         multiples.push(e)
      }
   })
   return multiples
}