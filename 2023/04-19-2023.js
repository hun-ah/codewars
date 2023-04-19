function removeAnchor(url) {
   return url.split('').slice(0, url.indexOf('#') === -1 ? url.length + 1 : url.indexOf('#')).join('')

   // better method: return url.split('#')
}

console.log(removeAnchor("www.codewars.com#about"), 'www.codewars.com')
console.log(removeAnchor("www.codewars.com?page=1"), "www.codewars.com?page=1")