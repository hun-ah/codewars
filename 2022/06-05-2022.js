/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
 */

function correct(string) {
   let newStr = string.split('')
   let corrected = newStr.map(x => {
      if (x === '0') {
         return 'O'
      } if (x === '5') {
         return 'S'
      } if (x === '1') {
         return 'I'
      } else {
         return x
      }
   })
   return corrected.join('')
}