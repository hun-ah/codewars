/* Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5. */

function giveMeFive(obj) {
   let arr = []
   for (let key in obj) {
      if (key.length === 5) {
         arr.push(key)
      } if (obj[key].length === 5) {
         arr.push(obj[key])
      }
   }
   return arr
}