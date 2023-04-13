/* Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it. */

function remove(string) {
   let noExc = []
   let arr = string.split('')

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] != '!') {
         noExc.push(arr[i])
      }
   }
   noExc.push('!')
   return noExc.join('')
}