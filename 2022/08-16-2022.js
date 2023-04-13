/* You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in: */

function sixToast(num) {
   return num === 0 ? 0 : Math.abs(num - 6)
}