//Created on 2017-12-09
// 参考————http://blog.csdn.net/webxiaoma/article/details/70160811
// 涉及知识点————面向对象编程，this,tostring()
(function showTime() {
	let now = new Date().toString()
	let left = /2017\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;
	right.exec(now)
	console.log(RegExp.leftContext)
}).call(this)

function Foo(){
	getName = function(){
		console.log(1)
	};
	return this;
}

Foo.getName = function(){ console.log(2) }
Foo.prototype.getName = function(){ console.log(3) }
var getName = function(){ console.log(4) }
function getName(){ console.log(5)}


Foo.getName();
getName()
try{ Foo().getName() }
catch(err){
	console.log("hh")
}


function father(){

	function obj(){
		return this;
	}
}
function obj(){
	"use strict"
	return this;
}
//console.log(obj())  //返回编译环境的内建对象
console.log(obj())    //undefined



var thing = {a:"Custom"};
var a = "Global";
function whatsThis(){
	return this.a;
}

console.log(whatsThis())
console.log(whatsThis.call(thing));
console.log(whatsThis.apply(thing));


//console.log(typeof 1/0)

/*
**关于Object.prototype.toString.call()
*/

/*function bar() {
  console.log(Object.prototype.toString.call(this));
}
bar(7)  //[object global]
bar.call(7); 
bar('ggg')
var o = new Object();
var arr = new Array(),
	time = new Date(),
	num = new Number()
console.log("o.toString():  " + o.toString());
console.log("Object.prototype.toString.call(o): " + Object.prototype.toString.call(o))

console.log(arr.toString());
console.log(Object.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(time))
console.log(Object.prototype.toString.call(num))
console.log(Object.prototype.toString.call(whatsThis()))



*/





