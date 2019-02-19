/*var jquery = require('jquery');
exports.$ = jquery;
console.log(module);
*/
var a = require('./eloquent');
a.on('ready', function() {
  console.log('module a is ready');
});



