正则表达式作用：验证客户端输入
很好的学习网站 https://regexr.com/


+ flags   g i m

+ character classes, quantifiers, grouping, lookaheads, and backreferences 捕获




## String 对象中的正则表达式方法
```javascript
var str1 = "This is Box. This is a box too";
console.log(str1.replace(/box/ig,"Tom"));
console.log(str1.match(/box/ig))    //[ 'Box', 'box' ]
console.log(/box/ig.exec(str1))     //[ 'Box', index: 8, input: 'This is Box. This is a box too' ]
console.log(str1.search(/box/ig))   //8

console.log(str1.split(/box/ig))
console.log(str1.split(/ /ig))
console.log(str1.split(" "))
//都不改变str1
```

## Boundaries | Anchors
+ ^ $ b B
```javascript
console.log(/\w+$/gi.exec("she sells seashells"))
console.log(/^\w+/gi.exec("she sells seashells"))
console.log(/\b\w/g.exec("she sells seashells")) //只能匹配第一个,即she,因为exec只找一个,此时建议用match
console.log("she sells seashells".match(/\b\w/g))
```

## character classes
```javascript
var path = "D:\\learnByDo\\awecg.github.io\\blog\\themes\\landscape";
console.log(path.replace(/[^\\]+$/,""));
```
