let cl = console.log
function showTime() {
	let now = new Date().toString()
	let left = /2017\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;
	right.exec(now)
	cl(RegExp.leftContext)
}
showTime()


var arrQuick =  [2,44,54,636,1,64,63,73,3,44,38,5,47,3434,15,36,26,27,2,46,4,19,50,48],
	arrSelect = [2,44,54,636,1,64,63,73,3,44,38,5,47,3434,15,36,26,27,2,46,4,19,50,48],
	arrInsert = [2,44,54,636,1,64,63,73,3,44,38,5,47,3434,15,36,26,27,2,46,4,19,50,48],
	arroo

let quickSort = function(arr) {
	if(arr.length <= 1) return arr;
	let pivotIndex = Math.floor(arr.length/2);
	let pivot = arr.splice(pivotIndex,1)[0];
	let left = [], right = [];
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < pivot) 
			left.push(arr[i])
		else
			right.push(arr[i])
	}

	return quickSort(left).concat([pivot],quickSort(right));
}

// console.time('quickSort')
// // cl(quickSort(arr1))
// console.timeEnd('quickSort')

function selectSort(arr){
	let minIndex,temp;
	console.time('selectSort')
	for(let i = 0; i<arr.length-1; i++){
		minIndex = i;
		for(let j = i + 1; j<arr.length; j++)
			if(arr[j] < arr[minIndex]) minIndex=j;
		
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	console.timeEnd('selectSort');
	return arr;
}
// selectSort(arr1)
// cl(selectSort(arr1))

function insertSort(arr){
	if({}.toString.call(arr).slice(8,-1) === 'Array'){
		console.time('insertSort')
		for(let i = 1; i<arr.length; i++){
			let value = arr[i];   //确认当前移动元素大小
			let j = i -1;       //移动元素前面的元素
			while(j>=0 && arr[j]>value){   
				arr[j+1] = arr[j]; //比较元素依次后移
				j--;   //移动元素前移
			}
			arr[j+1] = value;   //插入！
		}
		console.timeEnd('insertSort')
		return arr;
	} else {
		return 'argument is not a array!'
	}
}
insertSort(arrInsert)
// cl(insertSort(arr2))

