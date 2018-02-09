var _ = require('./183.js')
var fs = require("fs")




// console.log(exports)
// console.log(module)
console.log()

// console.dir(global)
fs.writeFile('C:\\Users\\我\\Desktop\\blog\\node\\global.txt', global, (err) => {
  	if (err) throw err;
  	console.log('It\'s saved!');
});
// console.log(_.each.toString())
