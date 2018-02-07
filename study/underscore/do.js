var _ = require('./183.js')



console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
console.log([1, 2, 3, 4, 5, 6].find(num => num % 2 == 0))

console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
console.log([1, 2, 3, 4, 5, 6].filter(num => num % 2 == 0))
console.log()
console.log()
console.log()
// console.log(_.each.toString())
