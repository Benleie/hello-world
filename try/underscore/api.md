
Collection ---Handles raw objects in addition to array-likes.
```js
_.each([1,2,3],console.log);
_.each({one: 1, two: 2, three: 3}, console.log);

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log([2,4,6].map(num => num*3 ))
console.log(_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }))
console.log(_.map([[1, 2], [3, 4]], _.first))

console.log( _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0))
console.log([1,2,3].reduce((accumulator, currentValue) => accumulator + currentValue, 4))
var list = [[0, 1], [2, 3], [4, 5]];
console.log(_.reduce(list, function(a, b) { return a.concat(b); }, []))
console.log(_.reduceRight(list, function(a, b) { return a.concat(b); }, []))
console.log(list.reduceRight((a,b)=>a.concat(b), []))

console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
console.log([1, 2, 3, 4, 5, 6].find(num => num % 2 == 0))
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
console.log([1, 2, 3, 4, 5, 6].filter(num => num % 2 == 0))



```