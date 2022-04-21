/* Can you find the needle in the haystack ?

   Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message(as a string) that says:

"found the needle at position " plus the index it found the needle */

function findNeedle(haystack) {
   let found = haystack.indexOf('needle')
   return `found the needle at position ${found}`
}

/* Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives. */

function invert(array) {
   return array.map(x => -x)
}

/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */

function past(h, m, s) {
   h *= 3600
   m *= 60
   let timeInSeconds = h + m + s
   let timeInMilliseconds = timeInSeconds * 1000
   return timeInMilliseconds
}