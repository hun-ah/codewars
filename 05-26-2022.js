/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once. */

function doubleChar(str) {
   let arr = str.split('')
   let newArr = arr.map(x => x + x).join('')
   return newArr
}

/* Used switch statement to solve previously solved codewars */

function updateLight(current) {
   switch (current) {
      case 'green':
         return 'yellow'
         break;
      case 'yellow':
         return 'red'
         break;
      case 'red':
         return 'green'
   }

}