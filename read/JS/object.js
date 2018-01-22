
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



/*let a = 1;
cl(this.a)    //undefined
*/

/*function Cat(name, color){
	return {
		names:name,
		color:color
	}
}
var cat1 = Cat('大毛','黄色')
cl(cat1)
*/
function Animal(){
	this.species = '动物';
}
/*function Cat(name,color){
	Animal.apply(this);
	this.name = name;
	this.color = color;
}
var cat1 = new Cat('大毛','黄色');
cl(cat1.species)*/
function Cat(name,color){
	this.name = name;
	this.color = color;
}
Cat.prototype = new Animal()
cl(Cat.prototype.constructor.toString())
cl(Cat.prototype.__proto__  === Object.getPrototypeOf(Cat.prototype))
cl(Object.getPrototypeOf(Cat.prototype))
// Cat.prototype = new Animal()
// cl(Cat.prototype.constructor)   //[Function: Animal]

// var F = function(){};
// F.prototype = Animal.prototype;
// Cat.prototype = new F();
// cl(Cat.prototype.constructor)   //[Function: Animal]













/*var str = new String('fool me')
cl(str instanceof String)*/


/*var child = require('child_process');
child.exec('D:\\管理C盘\\软件们\\我爱\\firefox.exe http://www.jianshu.com/p/499ebfae2b50')
*/
// var http=require('http');
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


/*
cl(this)
function guess(){
	cl(this)
}
guess()
*/



// cl(Math.random() + 0.5)







