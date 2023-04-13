/* Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is" */

function whoIsPaying(name) {
   let arr = [name]
   let split = name.split('')
   for (let i = 0; i < split.length; i++) {
   }
   let trunc = []
   trunc.push(split[0], split[1])
   let str = trunc.join('')
   arr.push(str)

   if (name.length < 3) {
      return [name]
   } else {
      return arr
   }
}

/* This code didn't work and i'm not 100% sure why but I found a solution that works and makes sense to me (below). I will redo tmrw with another codewars */

function whoIsPaying(name) {
   if (name.length <= 2) {
      return [name];
   } else {
      return [name, name[0] + name[1]]
   }

}