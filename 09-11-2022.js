/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics: */

function correctPolishLetters(string) {
   console.log(string.split('').map(l => {
      if (l === 'ą') {
         return 'a'
      } if (l === 'ć') {
         return 'c'
      } if (l === 'ę') {
         return 'e'
      } if (l === 'ł') {
         return 'l'
      } if (l === 'ń') {
         return 'n'
      } if (l === 'ó') {
         return 'o'
      } if (l === 'ś') {
         return 's'
      } if (l === 'ź') {
         return 'z'
      } if (l === 'ż') {
         return 'z'
      } else {
         return l
      }
   }).join(''))
}