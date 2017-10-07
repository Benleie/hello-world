1.8 new改变了this的指向；


作业二:
```javascript
function tobe(){
	this.a = 1;
	return false;
}
cl(typeof tobe())  //boolean
cl(typeof new tobe())   //object
```




