关于对象，关于作用域。
以及沧海的闭包练习题，变量解析，this等等等等。
```javascript
var name = "a"
var obj = {
	name: "b",
	get() {
		return this.name;
	}
}
console.log(obj.get())
console.log((obj.get)())
console.log((obj.get = obj.get)())
```




```javascript
var o = {
	that:function(){
		return this;
	},
	name: "I am o",
	fn: function(){
		console.log(this.fn.toString())
	},
	m:{ 
		name:"an object in object o",
		fun1:function(){
			console.log(that.name)
		}
	},
	hobby: "make love"
	
}
o.m.fun1()
```

```javascript
```

```javascript
```