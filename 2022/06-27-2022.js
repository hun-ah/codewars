/* Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog. */

function howManyDalmatians(number) {

   var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

   var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]

   return respond
}

/* Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity. */

const flip = (d, a) => {
   return d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => a - b).reverse()
}