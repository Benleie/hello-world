
var $p = $("p")
//console.log($p)

var arr = [1,2,3];
arr.__proto__ = {
    addClass: function  () {
        console.log('this is addClass');
    },
    concat: Array.prototype.concat,
    push: Array.prototype.push
};




console.log(arr.__proto__.constructor === Object );  
console.log(arr.__proto__.constructor ) //ƒ Object() { [native code] }

console.log($p.__proto__.constructor === arr.__proto__.constructor)












/*
var arr = [1,2,3]
console.log(arr.__proto__)
console.log(Array.prototype)


console.log(Zepto)
console.log(Zepto === $)

var fn = function(){}
console.log(fn.__proto__ === Function.prototype)
console.log(fn.prototype)
console.log(fn.__proto__)
console.log(Function.prototype)


var camelize = function(str){ 
	return str.replace(/-+(.)?/g, function(match, chr){ 
		return chr ? chr.toUpperCase() : '' }) }
console.log($.camelCase('hello-there'))
console.log(camelize('hi-there'))
*/
