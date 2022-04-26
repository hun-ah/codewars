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