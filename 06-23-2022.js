/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string. */

function shortcut(string) {
   let a = string.split('')
   let noVowels = []

   a.forEach(e => {
      if (e !== 'i' && e !== 'o' && e !== 'a' && e !== 'e' && e !== 'u') {
         noVowels.push(e)
      }
   })
   return noVowels.join('')
}