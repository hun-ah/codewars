/* The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again! */

function sayHello(name) {
   return `Hello, ${name}`
}

/* For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */

function well(x) {
   let sum = 0
   x.forEach(e => {
      if (e === 'good') {
         sum += 1
      }
   })
   if (sum > 2) {
      return 'I smell a series!'
   } else if (sum > 0 && sum <= 2) {
      return 'Publish!'
   } else {
      return 'Fail!'
   }
}
