subtr,slice,substring

```js
var timeString = '' + Date.now();
console.log(timeString)

console.log(timeString.substring(timeString.length - 6,timeString.length))
console.log(timeString.substring(timeString.length - 6))

console.log(timeString.slice(-6))
console.log(timeString.slice(-6,0))

console.log(timeString.substr(-6))
console.log(timeString.substr(-6,6))

console.log(String.prototype.slice.call(Date.now(),-6))
```