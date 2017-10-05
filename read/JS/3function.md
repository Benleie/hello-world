1改进函数add
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
4  function literal notation; named function expression竟然还有这种写法,myFunc是名存实亡的
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

即时函数，函数表达式的即时调用；这种写法应该无所谓`return`吧。
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





```javascript
```




