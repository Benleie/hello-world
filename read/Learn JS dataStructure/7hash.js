function Dictionary(){
	var items = {};
	this.has = function(key){
		return key in items;
	}
	this.set = function(key,value){
		items[key] = value;
	}
	this.remove = function(key){
		if(this.has(key)){
			delete items[key]
			return true;
		}
		return false;
	}
	this.get = function(key){
		return this.has(key)?items[key]:undefined
	}
	this.values = function(){
		var values = []
		for(var k in items){
			// if(this.has(k))
				values.push(items[k])
		}
		return values;
	}
	this.size = function(){
		return this.values().length
	}
	this.keys = function(){
		var keys = []
		for(var k in items)
			keys.push(k)
		return keys
	}
	this.print = function(){
		return items;
	}

}
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
dictionary.remove('John')
// console.log(dictionary.has('Gandalf'))  //true
console.log(dictionary.values())
console.log(dictionary.keys())
console.log(dictionary.print())




var loseloseHashCode = function(key){
	var hash = 0;
	for(var i = 0; i<key.length; i++){
		hash += key.charCodeAt(i);
	}
	return hash % 37;
}
var djb2HashCode = function(key){
	var hash = 5381;
	for(var i = 0; i <key.length; i++)
		hash = hash*33 +key.charCodeAt(i);
	return hash % 1013;
}
function HashTable(){
	var table = [];
	this.put = function(key,value){
		var position = loseloseHashCode(key)
		console.log(position + ' - ' + key);
		table[position] = value;
	}
	this.get = function(key){
		return table[loseloseHashCode(key)];
	}
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	}
	this.print = function(){
		for(let i = 0; i<table.length;i++){
			if(table[i] !== undefined)
				console.log(i + ': ' +table[i]);
		}
	}
}
var hash = new HashTable();
hash.put('Gandalf','gandalf@email.com') //19 - Gandalf
// console.log(hash.table)   没有this，所以没有被new
// console.log(hash.get('Gandalf'))   //gandalf@email.com
// hash.remove('Gandalf')
hash.print()


//哈希冲突处理：分离链接
function LinkedList() {
	var Node = function(element){
		this.element = element;
		this.next = null;
	};
	this.append = function(element){
		var node = new Node(element), 
			current; 
		if (head === null){ //列表中第一个节点 
			head = node;
		} else {
			current = head; 
			//循环列表，直到找到最后一项
			while(current.next){
				current = current.next;
			}
			//找到最后一项，将其next赋为node，建立链接
			current.next = node; 
		}
		length++; //更新列表的长度 
	};
	this.getHead = function(){
		return head;
	}
	this.removeAt = function(position){
		//检查越界值
		if (position > -1 && position < length){ 
			var current = head, 
			previous, 
			index = 0; 
			//移除第一项
			if (position === 0){ 
				head = current.next;
			} else {
				while (index++ < position){ 
					previous = current; 
					current = current.next; 
				}
			//将previous与current的下一项链接起来：跳过current，从而移除它
			previous.next = current.next; 
			}
			length--; 
			return current.element;
		} else {
		return null; 
		}
	};
	this.indexOf = function(element){
		var current = head, 
		index = -1;
		while (current) { 
			if (element === current.element) {
				return index; 
			}
			index++; 
			current = current.next; 
		}
		return -1;
	};	
	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	this.isEmpty = function() {
		return length === 0;
	};

}



function HashTable(){
	var table = [];
	var ValuePair = function(key, value){
		this.key = key;
		this.value = value;
		this.toString = function() {
			return '[' + this.key + ' - ' + this.value + ']';
		}
	};		
	this.put = function(key,name){
		let position = djb2HashCode(key)
		if(table[position] === undefined)
			table[position] = new LinkedList()
		table[position].append(new ValuePair(key, value))
	}
	this.get = function(key){
		let position = djb2HashCode(key)
		if(table[position] !== undefined){
			var current = table[position].getHead()
			while(current.next){
				if(current.element.key === key)
					return current.element.value;
				current = current.next
			}
			if(current.element.key === key)
				return current.element.value
		}
		return undefined;
	}
	this.remove = function(key){
		let position = djb2HashCode(key)
		if(table[position] !== undefined){
			var current = table[position].getHead()
			while(current.next){
				if(current.element.key === key){
					table[position].remove(current.element)
					if(table[position].isEmtpy())
						table[position] = undefined
					return true
				}
				current = cu.next;
			}	
			if(current.element.key === key){
				table[position].remove(current.element)
				if(table[position].isEmtpy())
					table[position] = undefined
				return true
			}
		}
		return false;
	}
}
 

//线性堪探法
function HashTable(){
	var table = [];
	var ValuePair = function(key, value){
		this.key = key;
		this.value = value;
		this.toString = function() {
			return '[' + this.key + ' - ' + this.value + ']';
		}
	};	
	this.put = function(key, value){
		var position = djb2HashCode(key)
		if(table[position] === undefined)
			table[position] = new ValuePair(key, value)
		else{
			var index = ++position;
			while(table[index] !== undefined)
				index++
			table[index] = new ValuePair(key, value);
		}
	}
	this.get = function(key) {
		var position = djb2HashCode(key);
		if (table[position] !== undefined){ 
			if (table[position].key === key) { 
				return table[position].value; 
			} else {
				var index = ++position;
				while (table[index] === undefined|| table[index].key !== key)
					index++;
				if (table[index].key === key) 
					return table[index].value; 
			}
		}
		return undefined;
	};
	this.remove = function(key) {
		var position = djb2HashCode(key);
		if (table[position] !== undefined){ 
			if (table[position].key === key) { 
				 table[position] = undefined; 
			} else {
				var index = ++position;
				while (table[index] === undefined|| table[index].key !== key)
					index++;
				if (table[index].key === key) 
					table[index] = undefined; 
			}
		}
		return undefined;
	};

}











//7.2.5用最好的散列算法
function HashTable(){
	var table = [];
	this.put = function(key,value){
		var position = djb2HashCode(key)
		console.log(position + ' - ' + key);
		table[position] = value;
	}
	this.get = function(key){
		return table[djb2HashCode(key)];
	}
	this.remove = function(key){
		table[djb2HashCode(key)] = undefined;
	}
	this.print = function(){
		for(let i = 0; i<table.length;i++){
			if(table[i] !== undefined)
				console.log(i + ': ' +table[i]);
		}
	}
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

