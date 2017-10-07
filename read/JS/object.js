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

/*let person = {
	name:'hhh',
	age:13
}
let key = 'name'
cl(person[key])
*/

/*
cl(this)
function guess(){
	cl(this)
}
guess()
*/

/*let a = 1;
cl(this.a)*/

function tobe(){
	this.a = 1;
	return this;
}
cl(tobe())  //boolean
cl(new tobe())   //object





































/*var child = require('child_process');
child.exec('D:\\管理C盘\\软件们\\我爱\\firefox.exe http://www.jianshu.com/p/499ebfae2b50')
*/
var http=require('http');
//get 请求外网
/*let count = 0;
for(let i = 0; i<16; i++){
	let time1 = new Date();
	while(new Date - time1 < Math.random()*1000){

	}
	http.get('http://www.jianshu.com/p/499ebfae2b50',function(req){
		count++;
	});
};
cl(count)*/

/*http.get('http://www.jianshu.com/p/499ebfae2b50',
	function(req,res){
	req.on('end',function(){
		// console.info(html);
		console.log('ok')
	});
});
*/

/*var html='';
	req.on('data',function(data){
		html+=data;
	});*/






// cl(Math.random() + 0.5)







