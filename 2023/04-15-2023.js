// three strings
// => string of grouped letters (grouped by first letter of each input joined together and do for every letter)
// all inputs will be the same length

function tripleTrouble(one, two, three) {
   // take first element of each string and join together
   // repeat process for rest of letters left
   let str = ''

   for (let i = 0; i < one.length; i++) {
      str += one[i]
      str += two[i]
      str += three[i]
   }

   return str
}

console.log(tripleTrouble('aa', 'bb', 'cc'), 'abcabc')
console.log(tripleTrouble('hi', 'hi', 'hi'), 'hhhiii')
console.log(tripleTrouble('111', '222', '333'), '123123123')