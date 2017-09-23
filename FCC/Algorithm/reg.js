let cl = console.log
/*var time = new Date()
var now = time.toString();*/

// console.log(time.toString())
cl(new Date().toString())
function showTime() {
	let now = new Date().toString()
	let left = /2017\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;
	right.exec(now)
	cl(RegExp.leftContext)
}
showTime()  //17:20:07
// cl(RegExp.rightContext)   //+0800 (中国标准时间)









