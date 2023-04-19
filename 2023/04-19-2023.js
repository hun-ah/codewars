function removeAnchor(url) {
   return url.split('').slice(0, url.indexOf('#') === -1 ? url.length + 1 : url.indexOf('#')).join('')

   // better method: return url.split('#')
}

console.log(removeAnchor("www.codewars.com#about"), 'www.codewars.com')
console.log(removeAnchor("www.codewars.com?page=1"), "www.codewars.com?page=1")

var capitals = function (word) {
   const split = word.split('')
   const indexes = split.map(letter => {
      return split.indexOf(letter.toUpperCase())
   })
   const filtered = indexes.filter(n => n >= 0)
   const uniq = []
   filtered.forEach(e => {
      return !uniq.includes(e) && uniq.push(e)
   })

   return uniq.sort()
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6])
console.log(capitals('tsaNeijmSo'), [3, 8])

function remove(str) {
   const arr = str.split('')
   arr[arr.length - 1] === '!' && arr.pop()
   return arr.join('')
}

console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi!!")
console.log(remove("!Hi"), "!Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("Hi"), "Hi")