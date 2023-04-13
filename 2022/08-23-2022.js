/* Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

*/

function Dog(breed) {
   this.breed = breed;
   this.bark = function () {
      return 'Woof'
   }
}

var snoopy = new Dog("Beagle");


var scoobydoo = new Dog("Great Dane");
