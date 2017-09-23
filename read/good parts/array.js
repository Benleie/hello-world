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
showTime()

var myArray = ['one',1,2,3,4,6,7,8]
delete myArray[1]
myArray.splice(5,0,undefined)
// cl({}.toString.apply(myArray))
let her = myArray;
myArray[1] = 100
cl(her)

/*show types*/
/*
let notArray = new Array(2);
cl({}.toString.apply(notArray)) //[object Array]

var str = new String('hhh')
cl({}.toString.apply(str))    //[object String]

let tt = new RegExp('google')
cl(tt + ' is: ' +{}.toString.apply(tt))  // [object RegExp]
*/




