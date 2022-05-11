/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. */

const quarterOf = (month) => {
   if (month <= 3) {
      return 1
   } else if (month <= 6) {
      return 2
   } else if (month <= 9) {
      return 3
   } else {
      return 4
   }

}

/* Let's play! You have to return which player won! In case of a draw return Draw!. */

const rps = (p1, p2) => {
   if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
      return 'Player 1 won!'
   } else if (p1 === p2) {
      return 'Draw!'
   } else {
      return 'Player 2 won!'
   }
};