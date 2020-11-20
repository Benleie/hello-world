var _ = require('./183.js')
var fs = require("fs")
var util = require("util")



// console.log(exports)
// console.log(module)
var cache = [];
function output(o){
	return JSON.stringify(o, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
	});
}
// console.log(output(global))


fs.writeFile('C:\\Users\\我\\Desktop\\blog\\node\\global.txt', util.inspect(global), (err) => {
  	if (err) throw err;
  	console.log('It\'s saved!');
});
// console.log(_.each.toString())
