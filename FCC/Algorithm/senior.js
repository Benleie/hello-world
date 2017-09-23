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

//自从用了正则表达式，普通的注释的常常失效。。
function telephoneCheck(str) {
	var num = str.replace(/[^\d]/g,'');  //计算数字的个数
  if(num.length == 11){
    if(num[0] != '1')
      return false;
  }
  if(num.length >11 || num.length < 10)
    return false;
  if(/^-/.test(str))                  //排除区号为负的可能
    return false;
  if(/\(.+\)/.test(str)){
    //if(!/^1\s*/.test(RegExp.leftContext))
      //return false;
    if(!/\(\d{3}\)/.test(str))        //括号里面只能有三个数
      return false;
  }else{
    if(/\(|\)/.test(str))             //括号必须完整
      return false;
  }
  	return true;
}
telephoneCheck("555-555-5555");


/*var str = "(555)-555-5555"
// cl(/\(\d{3}\)/.test(str))

let str2 = "1  (666555-5555"
*/
// cl(/\(.+\)/.test(str2))
// var tt = /^1\s*/
// cl(RegExp.leftContext)
//cl(/\d*/g.exec(str2))    //...
// cl(str2.match(/\d*/g))  //...








