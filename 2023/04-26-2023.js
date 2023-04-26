// function binToDec(bin) {
//    return bin.split('').reverse().map((e, i) => e * Math.pow(2, i)).reduce((acc, c) => acc + c)
// }

// console.log(binToDec('1001001'), 73)
// console.log(binToDec('10110'), 22)
// console.log(binToDec('0'), 0)
// console.log(binToDec('1'), 1)

// function pillars(numPillars, pillarDistance, pillarWidth) {
//    // find width between first and last pillars in cm (not incl f/l)
//    const pilDist = (numPillars - 1) * pillarDistance * 100
//    // find width of remaining pillars
//    const otherPillWidth = numPillars * pillarWidth
//    // width of f/l pillars
//    const firstLast = pillarWidth * 2
//    return pilDist + otherPillWidth - firstLast
// }

// console.log(pillars(1, 10, 10), 0)
// console.log(pillars(2, 20, 25), 2000)
// console.log(pillars(11, 15, 30), 15270)


var Ghost = function () {
   // based on the corresponding index, return that string (choose randomly)
   const colors = ['white', 'yellow', 'purple', 'red']
   this.color = colors[Math.floor(Math.random() * colors.length)]
};

const ghost = new Ghost()
console.log(ghost.color)