/* Convert USD to CNY */

function usdcny(usd) {
   let currency = usd * 6.75
   return `${currency.toFixed(2)} Chinese Yuan`
}