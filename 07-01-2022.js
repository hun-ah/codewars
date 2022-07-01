/* The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents. */

function formatMoney(amount) {
   let input = amount + .00
   return `$${input.toFixed(2)}`
}

/* Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

 */

function weatherInfo(temp) {
   let c = convertToCelsius(temp)
   if (c < 0)
      return (c + " is freezing temperature")
   else
      return (c + " is above freezing temperature")
}

function convertToCelsius(temperature) {
   var celsius = (temperature - 32) * 5 / 9
   return celsius
}