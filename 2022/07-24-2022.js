/* fix buggy template literal */

function buildString(...template) {
   return `I like ${template.join(', ')}!`;
}