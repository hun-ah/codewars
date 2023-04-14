var cubeChecker = function (volume, side) {
   if (volume <= 0 || side <= 0) {
      return false
   } else if (Math.pow(side, 3) == volume) {
      return true
   } else {
      return false
   }
};