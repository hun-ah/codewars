/* Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

*** Took a stab at this and didn't get the answer. Spent over 30 mins trying to figure it out. Will come back to it and try again tomorrow ***

 */

function nextItem(xs, item) {
   let itemIndex
   for (let i = 0; i < xs.length; i++) {
      itemIndex = xs.indexOf(item)
   }
   if (xs.includes(item)) {
      console.log(xs[itemIndex + 1])
   } else {
      console.log(undefined)
   }
}