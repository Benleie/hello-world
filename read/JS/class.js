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

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var arr1 = ['666', 666, ['six', 'six']]
// cl(Object.getOwnPropertyNames(Point.prototype))

class Fool {
	constructor(){
		return Point
	}
}
var fool = new Fool()
// cl(fool.constructor)   //...

var obj = {};
// cl(Object.getOwnPropertyNames(Object))
// cl(Object.getOwnPropertyNames(obj.__proto__))



/*
*9.22突然想起来数据结构不过就是用语言的内建类型创建的；
*用JS和用C学习它其实对数据结构的知识掌握来说效果都是一样的；只是加强的各自语言的理解与运用；
*《JS描述》那本书被骂成狗，不过学起来估计还是要多少参考一点它；另外找到了巴西人15年的《学习》，以及GitHub的bitsy教程，足以一战！
*/
class List {
	constructor(value){
		this.memory = [arguments];
		this.length = 0;
	}
	get(address){
		return this.memory[address];
	}
	push(value){
		this.memory[this.length] = value;
		this.length++;
	}
	pop(){
		if(this.length === 0) return;
		let lastAddress = this.length -1;
		let value = this.memory[lastAddress]
		delete this.memory[lastAddress]
		this.length--;
	}
}
/*
let arr2 = new Array(10,11, 22, 33)
arr2[10] = 120;
arr2[9] = 111
// arr2.pop()
delete arr2[10]
cl(arr2)
let list = new List();
list.push(10)
list.push(11)
list.push(22)
list.pop()
cl(list.memory)
*/

/*
*9.23every方法的回调函数默认的参数是操作数组的，那么怎样获取到对象的属性
*/
/*var obj = {'name':'lee', 'sex':'male'}
const isBiggerThan10 = (element, index, array) => {
	cl(this)
  return element > 10;
}
let large = [2,4,5,3,56,4].some(isBiggerThan10,[obj])
cl(large)*/

/*let obj1 = {'hhh':'bane'}
let arr3 = ['h','hh','hhh']
arr3[3.4] = 'jjj'
arr3[1.2] = 'jjj'
delete arr3[1]
delete arr3[0] 
arr3.map(function(value){
	// cl(this)      //node的内部属性
	cl(value)
})
cl(arr3.length)*/
/*Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr);
});*/
let say = new Map()
say.set('dog','woof')
say.set('cat', 'mool')
cl(say)
console.log(0 + false)



