```javascript
function sumAll(arr) {
	var swap,
		sum = 0;
	if(arr[0] > arr[1])
		arr = arr.reverse()
	for(let i = arr[0]; i <= arr[1]; i++)
		sum += i;
	console.log(sum)
	return sum;
}
```



