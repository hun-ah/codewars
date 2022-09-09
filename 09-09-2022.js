/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!! */

function contamination(text, char) {
   if (text === '' || char === '') {
      return ''
   } else {
      return text.split('').map(e => char).join('')
   }
}