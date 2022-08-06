/* Check if string contains specified phrases */

function isLockNessMonster(s) {
   return s.includes('tree fiddy') || s.includes('three fifty') || s.includes('3.50')
}

// at first I tried solving this with an if statement, that returned an 'unspecified assertion error'. I looked at the solutions and found this one. I realized that includes() returns true or false (duh), so I didn't need to use the if statement to return a boolean value