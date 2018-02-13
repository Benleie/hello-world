---
title: 正则实操
tags:
  - javascript
  - regexp
---

### 筛选时间显示
```javascript
function showTime() {
	let now = new Date().toString()  //Sat Sep 23 2017 09:45:01 GMT+0800 (中国标准时间)
	let left = /2017\s/,
		right = /GMT/;
	left.exec(now)
	now = RegExp.rightContext;    //09:45:01 GMT+0800 (中国标准时间)
	right.exec(now)
	cl(RegExp.leftContext)    //09:45:01
}
showTime()
```

### 统计字符串中数字出现的次数
筛选出数字组成新的字符串即可
```javascript
var num = str.replace(/[^\d]/g,'');
```

### 搜索带pen的字符串,除了open.
### 求上一级目录。
```javascript
var path = "D:\\learnByDo\\awecg.github.io\\blog\\themes\\landscape";
console.log(path.replace(/[^\\]+$/,""));
```
### 使用正则将字符串首字母转为大写
```javascript
console.log("she sells seashells and so on".replace(/\b\w/g, function(word){
	return word.toUpperCase()
}))
```
