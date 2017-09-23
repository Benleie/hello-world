let cl = console.log;
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
/*function drop(arr, func) {
  // Drop them elements.
  console.log(func(arr[0]));
  while(!func(arr[0]))
  {
  	arr.shift();
  }
  console.log(arr);
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
drop([1, 2, 3, 7, 4], function(n) {return n > 3;});*/

/*function differ(arr1, arr2){
	// function findSame(value){
	// 	var sum = 0;
	// 	for (let i = 0; i<arr2.length; i++){
	// 		if(value == arr2[i])
	// 			sum++;
	// 	}
	// 	return sum;
	// }
	function findSame(value){
		for (let i = 0; i<arr2.length; i++){
			if(value == arr2[i])
				return true;
		}
		return false;
	}
	var arrSame = arr1.filter(findSame);
	

	function findDiffer(value){
		let sum = 0;
		for (let i = 0; i<arrSame.length; i++){
			if(value == arrSame[i])
				return false;
		}
		return true;
	}

	var arrDiffer1 = arr1.filter(findDiffer);
	var arrDiffer2 = arr2.filter(findDiffer);
	console.log(arrSame);
	console.log(arrDiffer1);
	console.log(arrDiffer2);
	[].push.apply(arrDiffer1,arrDiffer2);
	console.log(arrDiffer1);
	return arr1;
};
differ([1,2,3,5,6],[1,3,4,5,6,7,8]);*/

/*function myReplace(str, before, after) {
	if(before.charCodeAt() <= 90) 
		after = after.substring(0,1).toUpperCase() + after.substring(1);
	else
		after = after.substring(0,1).toLowerCase() + after.substring(1);
	// console.log('A'.charCodeAt())  //65
	// console.log('Z'.charCodeAt())  //90
	//console.log(before.charCodeAt()) //106
	// if(before)
	var patt = new RegExp(before);

	//var ath = str.match(/over/g);
	//console.log(ath);      //Array ["over"]
	// console.log(str.match(patt));
	// console.log(RegExp.$1)
	{
		var str2 = 'log';
		str2 = str2.substring(0,1).toUpperCase() + str2.substring(1);
		console.log(str2)
	}
	str = str.replace(patt, after);
	console.log(str);
  	return str;
}
myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
*/
// var pattern = /8(.*)8/;

/*{
	var pattern = /(go+\s*gle)/; //\s 可以匹配到空格
	var str = 'goooooo   gle and baidu and google';
	// console.log(pattern.exec(str));
	// console.log(str.match(pattern))
}
{
	var huan = '腾讯是中国互联网公司的巨头。腾讯的企业文化十分强大，比如腾讯的花名文化。';
	var ali = '阿里', qq = "腾讯";
	var qqRex = new RegExp(qq,'g');
	console.log(huan.replace(qqRex,ali));
	// console.log(qqRex.exec(huan));   //Array [ "腾讯" ]
	// console.log(huan.match(qqRex));  //Array [ "腾讯", "腾讯", "腾讯" ]
	//console.log(qqRex);   // /腾讯/g

	var farmer = '小华和胖娃，种花又种瓜。小华会种花不会种瓜，胖娃会种瓜不会种花';

}*/

/*
var hh1 = "坚决拥护以习近平总书记为核心的党中央。巴拉巴拉，富强民主文明和谐。蛤yu蛤，苟利国家生死以。"
    +"好好学习,天天向上";
var hh2 = '哈哈哈哈哈哈蛤哈哈哈哈哈哈哈哈哈';
var hh3 = '生活如此美好,苟且偷生也罢';
var hhstr = new RegExp("蛤|膜|苟",'g');
console.log('h2\t'+hhstr.test(hh2));
console.log('h3\t'+hhstr.test(hh3));  
console.log(hh1.search(hhstr));    //33
*/


/*function pair(str)
{
	
	var originArr = str.split('');
	var arr = [originArr.length];
	for (var i = originArr.length - 1; i >= 0; i--) {
		var x;
		switch(originArr[i])
		{
			case 'C':  x = 'G'; break;
			case 'G':  x = 'C'; break;
			case 'A':  x = 'T'; break;
			case 'T':  x = 'A'; break;
		}
		arr[i] = [originArr[i] , x];

		//console.log(typeof originArr[i])
	}
	console.log(arr)
	return arr;
}
pair('GCG');*/

/*function missingLetter(str)
{
	var start = str.charCodeAt(0);
	console.log(start)
	for(var i = 0; i<str.length; i++)
	{
		if(str.charCodeAt(i) != start + i){
			console.log(String.fromCharCode(start + i));
			return String.fromCharCode(start + i);
		}
	}
	return undefined;
}

missingLetter('abcdefghjklmno');*/

/*function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  // console.log(typeof false)
  if(typeof bool === 'boolean')
  	return true;
  if(bool == true || false)
  	console(true);
  console.log(false)
}

boo(false);
boo({ "a": 1 })*/



/*function unite(arr1, arr2, arr3) {
	var args = [].slice.call(arguments);
	var string = args.join();
	var arrS = string.split(',');
	var arr = []
	for(let i = 0; i<arrS.length; i++)
		arr.push(Number(arrS[i]))
	arr = arr.filter(function(element, index, self){
		return self.indexOf(element) === index;
	})
	console.log(arr)
	
    return arr1;
}*/


function binaryAgent(str) {
  var arr=str.split(" ");
  //Unicode编码？十进制二进制十六进制？
  arr = arr.map(function(value){
  	return parseInt(value,2)
  })
  var n = ''
  for(let i = 0; i<arr.length; i++){
  	n += String.fromCharCode(arr[i]);
  }
  // cl(n)
  return n;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

var arr3 = ['01000001', '01110010']
//cl(parseInt('01110010',2))  //114
// cl(String.fromCharCode(65,66,67))


function unite(arr1, arr2, arr3) {
	var args = [].slice.call(arguments);
	var reduced = args.reduce(function(a,b){
		return a.concat(b);
	},[])
	cl(reduced)
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
unite([1, 3, 2], [1, [5]], [2, [4]])

/*;function(){
	var some = ['you', 'rubbush', 'hehe', 'haha'];
	// console.log(some.toString() === some.join())  //ture
	var one = ['1','2'];
	var oneArray = [];
	for(let i = 0; i<one.length; i++){
		oneArray.push(Number(one[i]));
	}
	console.log(one)
	console.log(oneArray)
}(this)*/


/*
function everyll(collection, prop) {
  // Is everyone being true?
  	function each(value,prop){
		return value[prop]
	}
	var result = collection.every(each)
	// cl(result)
  	// cl(prop)
  	return result;
}

everyll([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
function isBigEnough(element, index, array) {
  return element >= 1;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// cl(passed)
var test = {"user": "Tinky-Winky", "sex": 'male', "age": 10}
var test2 = {"user": "Tinky-Winky", "sex": 'female'}
var arrTest = [test, test2]
function each(value,prop){
	value = value[prop]
	return value !== undefined && value!==null && value!==0 &&value!==false && value==value && value !=='';
}
var res = arrTest.every(each)
cl(res)
cl(each(test,'age'))

*/





