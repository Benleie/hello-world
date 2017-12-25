这种原型写法不能改变this的属性？？
```javascript
var Person = function(firstAndLast) {
	var name = firstAndLast.split(" ");
	this.firstName = name[0];
	this.lastName = name[1];
	this.fullName = firstAndLast;
};
Person.prototype.getFullName = function(){
	return this.fullName;
}
Person.prototype.getFirstName = function(){
	return this.firstName;
}
Person.prototype.getLastName = function(){
	return this.lastName;
}
Person.prototype.setFullName = function(firstAndLast){
	 this.fullName = firstAndLast;
}
Person.prototype.setFirstName = function(first){
	 this.firstName = first;
}
Person.prototype.setLastName = function(last){
	 this.lastName = last;
}
var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFirstName("Haskell")
console.log(bob.getFullName())
```