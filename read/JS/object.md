1.8 new运算符改变了this的指向；  
在node.js中，全局作用域下的this是[],函数作用域下的this则是node各个模块的属性和方法。



作业二:
```javascript
function tobe(){
	this.a = 1;
	return false;
}
cl(typeof tobe())  //boolean
cl(typeof new tobe())   //object
```




