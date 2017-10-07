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

/*let str = ',sss,,,'
// str = str - ',,,'    //NaN
//str = str.replace(',','')  //sss,,,
let coma = /\s+$/g
str = str.replace(coma,'')
cl(str)*/
















/*


var getRGB = function(hexo){
	var arr = [3];
	for(let i = 0;i<3;i++){
		let num = hexo.slice(2*i,2*i+2)
		arr[i] = parseInt(num,16)
	}
	return 'rgb('+arr[0]+','+arr[1]+','+arr[2]+")"
}
cl(parseInt('00FF00',16))
cl(getRGB('45FF00'))

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

/*var a = 1;
function f(){
	function n(){
		cl(a)
	}
	var a = 2;
	return n;
}
f()()*/


