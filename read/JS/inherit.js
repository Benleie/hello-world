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

//原型链示例
/*function Shape(){
	this.name = 'Shape';
	this.toString = function(){
		return this.name;
	};
}
// cl(Shape.prototype)     //{}
function TwoDShape(){
	this.name = '2D shape';
}
function Triangle(side,height){
	this.name = 'Triangle';
	this.side = side;
	this.height = height
	this.getArea = function(){
		return this.side*this.height/2
	}
}
TwoDShape.prototype = new Shape()
Triangle.prototype = new TwoDShape()
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

let my = new Triangle(5,10)
cl(my.toString())*/


//把共享属性迁移到原型中
/*function Shape(){}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function(){
	return this.name;
}
function TwoDShape(){}
TwoDShape.prototype = new Shape()
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape'

function Triangle(side,height){
	this.side = side;
	this.height = height;
}
Triangle.prototype = new TwoDShape()
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function(){
	return this.side*this.height/2;
}
let my = new Triangle()
cl(my.toString())*/



//尽量直接从原型继承，使用中介F()函数
/*function Shape(){}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function(){
	return this.name;
}

function TwoDShape(){}
function F(){}                    //空的构造器
F.prototype = Shape.prototype
TwoDShape.prototype = new F()
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape'

function Triangle(side,height){
	this.side = side;
	this.height = height;
}
function F(){}
F.prototype = TwoDShape.prototype
Triangle.prototype = new F()
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function(){
	return this.side*this.height/2;
}

let my = new Triangle()
cl(my.toString())
cl(my.__proto__.__proto__.__proto__)  //Shape { name: 'Shape', toString: [Function] }
*/



//构造函数添加uber的超类属性
//将继承部分封装成函数
/*function extend(child,parent){
	let F = function(){}
	F.prototype = parent.prototype;
	child.prototype = new F()
	child.prototype.constructor = child;
	child.uber = parent.prototype
}
function Shape(){}
Shape.prototype.name = 'Shape'
Shape.prototype.toString = function (){
	return this.constructor.uber
		?this.constructor.uber.toString()+', '+ this.name
		: this.name;
}
function TwoDShape(){}
extend(TwoDShape,Shape)
TwoDShape.prototype.name = '2D Shape'

function Triangle(side,height){
	this.side = side
	this.height = height
}
extend(Triangle,TwoDShape)
Triangle.prototype.name = 'Triangle'
Triangle.prototype.getArea = function(){
	return this.side*this.height/2
}
cl(new Triangle().toString())    //Shape, 2D Shape, Triangle
*/

























