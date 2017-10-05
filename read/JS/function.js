let cl = console.log
function showTime() {
	let now = new Date().toString()
	let left = /2017\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;
	right.exec(now)
	cl(RegExp.leftContext)
}
showTime();

var inner;
function out(){
	var b = 'local variable';
	var N = function(){
		return b;
	}
	inner = N;
}  
out()
cl(inner())











/*

function add(){
	let result = 0;
	for(let i = 0;i<arguments.length; i++)
		result += arguments[i]
	return result;
}
cl(parseInt('Ff',16))
cl(isFinite(Math.pow(2,54)))
var f = function myFunc() {
	cl(666)
	return 1;
};
f()
cl(f)


cl(parseInt('123abc'))  
cl(parseInt('0377'))   //377


cl(undefined + 1)

*/




