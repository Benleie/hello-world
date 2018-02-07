/*let cl = console.log
function showTime() {
	let now = new Date().toString()
	let left = /2017\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;
	right.exec(now)
	cl(RegExp.leftContext)
}
showTime()*/

let you = 'you cannot do it hard';
String.prototype.startWith = function(prefix){
	return this.slice(0,prefix.length) === prefix;
}
String.prototype.endWith = function(suffix){
	// return this.slice(0-suffix.length) === suffix;
	return this.indexOf(suffix,this.length - suffix.length) !== -1
}


/*cl(you.endWith(' hard'))
cl(you.startWith('you'))
cl(you.lastIndexOf('hard'))
cl('hahaha'.indexOf('ha',4))
*/




// Error.stackTraceLimit = 15
// cl(you.includes('hard'))
// cl(you.slice(-'is hard'.length))
// cl(String.prototype.slice)
// cl(you.slice(0,8))
// cl(you.substring(0,8))
// cl(you.substr(0))



/*const a = {
	i:1,
	toString:function (){
		return a.i++;
	}
}*/


/*const a = [1, 2, 3]
a.join = a.shift*/
if(a == 1 && a == 2 && a ==3)
	console.log("It's all happening!")
/*console.log(a.valueOf())
console.log(a.toString())
console.log(a.toString())*/
