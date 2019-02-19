1.改进函数add
```javascript
function add(){
	let result = 0;
	for(let i = 0;i<arguments.length; i++)
		result += arguments[i]
	return result;
}
add(2,4,5,6,3)   //20
```
2
```javascript
isFinite(1e309)  //false
isFinite(1e308)  //true
```
eval有何用途？   
4.function literal notation; named function expression竟然还有这种写法,myFunc是名存实亡的
```javascript
var f = function myFunc() {
	cl(666)
	return 1;
};
f()    //666
```
与函数声明的区别：上下文不同？

一个匿名回调函数的例子
```javascript
function invoke(a,b){
	return a() + b();
}
let res = invoke(
	function(){return 1},
	function(){return 2}
	)
cl(res)    //3
```

即时函数，函数表达式的即时调用；  
这种写法应该无所谓`return`吧。

不产生全局变量，常用于初始化
```javascript
(function(num){
	cl(666+num)
})(666);

!function(num){
	cl(666+num)
}(666);
(function(num){
	cl(666+num)
}(666));
```

返回函数的函数
```javascript
function a(){
	cl(666);
	return function(){
		cl('sixsix')
	}
}
var newFunc = a();
newFunc()
a()()
```

4.7初始化后的重写
```javascript
function a(){
	cl("a");
	a = function(){
		cl('AA')
	}
}
a()    //1
a()    //AA
```

加载后重写，可以用于浏览器兼容
```javascript
var a = (function(){
	function setUp(){
		console.log('setUp')
	};
	function actualWork(){
		cl('actualWork')
	}
	setUp();
	return actualWork;
}())
a()  
```




作业
一：得到rgb的表达形式
```javascript
var getRGB = function(hexo){
	var arr = [3];
	for(let i = 0;i<3;i++){
		let num = hexo.slice(2*i,2*i+2)
		arr[i] = parseInt(num,16)
	}
	return 'rgb('+arr[0]+','+arr[1]+','+arr[2]+")"
}
```


二：输出什么
```javascript
cl(parseInt(1e1))      //10
cl(parseInt('1e1'))    //1
cl(parseFloat('1e1'))  //10
cl(isFinite(0/10))     //true
cl(isFinite(20/0))     //false
cl(isNaN(parseInt(NaN)))   //true
```


三：输出什么
```javascript
var a = 1;
function f(){
	function n(){
		cl(a)
	}
	var a = 2;
	n();
}
f()   //2
```

四：解释
```javascript
var f = console.log;
eval('f("Boo!")')     //将console.log函数赋值给变量f

var e;
var f = console.log;
eval('e = f')('Boooo')   //eval('e = f')相当于调用函数console.log,参数在后面跟着

! function(){ return console.log}
()('Bo!')                   //函数表达式自调用，返回console.log函数,然后调用之
```
