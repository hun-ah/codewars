function binToDec(bin) {
   return bin.split('').reverse().map((e, i) => e * Math.pow(2, i)).reduce((acc, c) => acc + c)
}

// console.log(binToDec('1001001'), 73)
// console.log(binToDec('10110'), 22)
// console.log(binToDec('0'), 0)
// console.log(binToDec('1'), 1)