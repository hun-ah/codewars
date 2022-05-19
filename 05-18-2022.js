/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). */

function cockroachSpeed(s) {
   //multiply km/m by 27.7777777778
   return Math.floor(s * 27.7777777778);
}