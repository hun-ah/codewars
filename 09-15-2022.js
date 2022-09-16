/* Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color. */

function colorOf(r, g, b) {
   let arr = [r, g, b]
   let rgb = arr.map(e => {
      if (e < 10) {
         return '0' + e
      } if (e < 16 && e > 9) {
         return '0' + e.toString(16)
      } else {
         return e.toString(16)
      }
   })
   return '#' + rgb.join('')
}