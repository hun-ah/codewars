/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point */

function points(games) {
   let total = 0
   games.forEach(game => {
      if (game[0] > game[2]) {
         total += 3
      } else if (game[0] === game[2]) {
         total += 1
      } else {
         total += 0
      }
   })
   console.log(total)
}

/* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd. */

function otherAngle(a, b) {
   return 180 - (a + b)
}