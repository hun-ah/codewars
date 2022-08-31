/* Fix bugs in code */

function myFirstKata(a, b) {
   if (typeof a != "number" || typeof b != "number") {
      return false;
   }
   else {
      return a % b + b % a;
   }
}