function Stack(){
	var items = [];
	this.push = function(element){
		items.push(element);
	}
	this.pop = function(){
		return items.pop();
	}
	this.peek = function(){
		return items[items.length-1]
	}
	this.isEmpty = function(){
		return items.length === 0
	}
	this.size = function(){
		return items.length
	}
	this.clear = function(){
		items = []
	}
	this.print = function(){
		console.log(items.toString())
	}
}

function divideBy2(decNumber){
	let remStack = new Stack(),
		rem,
		binaryString = '';
	while(decNumber > 0){
		rem = Math.floor(decNumber % 2);
		remStack.push(rem)
		decNumber = Math.floor(decNumber / 2)
	}
	while(!remStack.isEmpty())
		binaryString += remStack.pop();  //没必要有toString()
	return binaryString;
}
// console.log(divideBy2(1000))

function baseConverter(decNumber, base){
	var remStack = new Stack(),
		rem,
		baseString = '',
		digits = '0123456789ABCDEF'; 
	// console.log(digits[3])   //3
	while (decNumber > 0){
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while (!remStack.isEmpty()){
		baseString += digits[remStack.pop()]; 
	}
	return baseString;
}
console.log(baseConverter(100345,2))
console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))
