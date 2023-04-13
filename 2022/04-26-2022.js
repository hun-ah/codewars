/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function find_average(array) {
   return (array.length === 0) ? 0 : array.reduce((a, c) => a + c, 0) / array.length
}

/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
   let rna = dna.split('').map(x => {
      if (x === 'T') {
         return 'U'
      } else {
         return x
      }
   }).join('')
   return rna
}

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

function lovefunc(flower1, flower2) {
   if (flower1 % 2 === 0 && flower2 % 2 === 1 || flower2 % 2 === 0 && flower1 % 2 === 1) {
      return true
   } else {
      return false
   }
}

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
   return a.includes(x)
}