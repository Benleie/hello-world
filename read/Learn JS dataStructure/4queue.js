//4-1
function Queue(){
	let items = [];
	this.enqueue = function(element){
		items.push(element)
	}
	this.dequeue = function(){
		return items.shift()
	}
	this.front = function(){
		return items[0];
	}
	this.isEmpty = function(){
		return items.length === 0
	}
	this.size = function(){
		return items.length
	}
	this.print = function(){
		console.log(items.toString())
	}
}
let queue = new Queue()
console.log(queue.isEmpty())   //true
queue.enqueue('John');
queue.enqueue('Jack')
queue.enqueue('Camila')
queue.print()     //John,Jack,Camila
queue.dequeue()
queue.dequeue()
queue.print()      //John


//4-2   最小优先队列:优先级越高，priority越小
function PriorityQueue(){
	let items = []
	function QueueElement(element,priority){
		this.element = element;
		this.priority = priority;
	}
	this.enqueue = function(element,priority){
		let queueElement = new QueueElement(element,priority);
		if(this.isEmpty())
			items.push(queueElement)
		else {
			let added = false;
			for(let i=0; i<items.length; i++){
				if(queueElement.priority < items[i].priority){
					items.splice(i,0,queueElement)
					added = true
					break;
				}
			}
			if(!added)
				items.push(queueElement)
		}
	}
	this.dequeue = function(){
		return items.shift()
	}
	this.front = function(){
		return items[0];
	}
	this.isEmpty = function(){
		return items.length === 0
	}
	this.size = function(){
		return items.length
	}
	this.print = function(){
		console.log(items.toString())
	}
}
let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('Jack',2)
priorityQueue.enqueue('Jacks',3)
priorityQueue.enqueue('tomas',1)
cl(priorityQueue.size())      //3
cl(priorityQueue.front())    //QueueElement { element: 'tomas', priority: 1 }
priorityQueue.dequeue() 
cl(priorityQueue.front())    //QueueElement { element: 'Jack', priority: 2 }


//4-3循环队列-击鼓传花：队列的应用
function hotPotato(nameList,num){
	let  queue = new Queue()
	for(let i = 0; i<nameList.length; i++)
		queue.enqueue(nameList[i])
	let eliminated = ''
	while(queue.size()>1){
		for(let i = 0; i<num;i++)
			queue.enqueue(queue.dequeue())
		eliminated = queue.dequeue()
		console.log(eliminated + '在击鼓传花游戏中被淘汰。')
	}
	return queue.dequeue()
}
var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者：'+ winner)






