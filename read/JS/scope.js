//性能测试；
'use strict'
var start = +new Date();
for(var i = 0; i<5000000; i++){
let num = 123;
let str = 'abc';
let obj = {key:'value'};
let arr = ['bill','dell'];
}
var end = +new Date();
console.log(end - start);  //11 10

/*var start = new Date();
for(var i = 0;i<5000000;i++){
	var num = 123;
	var str = 'abc';
	var obj = {key:'value'};
	var arr = ['bill','dell'];
}
var end = new Date();
console.log(end - start);  //69 63 67
*/
/*console.log(a);
let a = 666;*/
       //ReferenceError: can't access lexical
		//declaration `a' before initialization


/*
var num = 1;
{
	let num = 2;       //2
	console.log(num);
}
console.log(num);    //1
*/

/*
var num = 1;
{
	var num = 2;          //2
	console.log(num);
}
console.log(num);         //2
*/

/*for(let i = 0; i<2; i++){
	console.log('outer i: ' + i);
	for(let i = 0; i<2; i++)
		console.log('inner i: ' +i);
}*/

/*for(var i = 0; i<2; i++){
	console.log('outer i: ' + i);
	for(var i = 0; i<2; i++)
		console.log('inner i: ' +i);
}*/

/*for(let i = 0; i<2; i++){
	console.log('outer i: ' + i);
	for(var i = 0; i<2; i++)    //SyntaxError: redeclaration of let i
		console.log('inner i: ' +i);
}*/






