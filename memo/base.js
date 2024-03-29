//对象式
/*var Base = {
	getId:function(id){
		return document.getElementById(id);
	},
	getName:function(name){
		return document.getElementsByName(name);
	},
	getTagName:function(tag){
		return document.getElementsByTagName(tag);
	}
};*/

//构造函数式
// var $ = new Base();     //????
var $ = function(){
	return new Base();
}
function Base(){

	this.elements = [];
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	};  
	/*this.getId = function(id){
		return document.getElementById(id);
	};*/
	this.getTagName = function(tag){
		var tags = document.getElementsByTagName(tag);
		for (var i=0; i<tags.length; i++)
			this.elements.push(tags[i]);
		return this;
	};
}
 
Base.prototype.css = function(attr, value) {
	for (var i = 0; i<this.elements.length; i++)
		this.elements[i].style[attr] = value;
	return this;
};

Base.prototype.html = function(str){
	for (var i = 0; i<this.elements.length; i++)
		this.elements[i].innerHTML = str;
	return this;
};

Base.prototype.click = function(fn){
	for (var i = 0; i<this.elements.length; i++)
		this.elements[i].onclick = fn;
	return this;
}

