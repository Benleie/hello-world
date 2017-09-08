function cl(some){
	return console.log("Iam$$: " + some);
}
/*String Function slice split
var str = "Goodmorning,myfriends!";
cl(str.length);
var str2 = str.slice(-2);
cl(str2+"  "+str);
////////////////////split//////////////////////////////////
var str = "Every night in my dream";
var arr = str.split(" ");
var arr1 = str.split(',');
cl(str.split(""));
cl(str.split(" "));    
cl(arr[0]);       //Every
cl(str.split(','));       
cl(arr1[0]);     //Every night in my dream
////////////////////字符串与数组转换///////////////////////
var fruits = ['Apple', 'Banana'];
fruits.forEach(function(item, index){
	cl(item +"  index: "+ index);
});
var str = fruits.toString();  //数组转换为字符串
cl(str);                         //；str用逗号隔开
cl(typeof fruits);
cl(typeof str);           
var arr = str.split(",");
cl(typeof arr);  
cl(arr[1]);   //banana;
/////////////////////replace////////////////////////
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join('---');
}
var newString = 'abc12345#$67*%'.replace(/([^\d]*)(\d*)([^\w]*)/,
	replacer);
cl(newString);  // abc - 12345 - #$*%


/////////////////////RegExp///////////////////////////
cl(/box/i.exec("this is a BOX"));  //BOX
var pattern = /box/ig;
var re = / /ig;
var str = 'This is Box! That is BOX.';
cl(str.match(pattern));
cl(str.search(pattern));
cl(str.split(re));    //相当于str.split(' ');
/////////////////首字母大写////////////////
var str = "hello";
cl(str.charAt(0).toUpperCase()); //H
cl(str);   //hello

var str = 'hello world';         //法一：GG
var arr = str.split(' ');
cl(arr);
cl(typeof arr[0]);
var arr1 = [];
for (let i = 0; i<arr.length; i++){
	arr1[i] = arr[i].split('');
	//arr1[i][0].toUpperCase();  //这一行代码怎么了?
	//cl(arr1[i]);
	//cl('ok'.toUpperCase());
}
for(let j = 0; j < arr.length; j++){
	arr1[j][0].toUpperCase();    //也不行;
}
cl(arr1[0][0]);

var str = "hello";
var pattern = /[a-z]/i;
var result = str.replace(pattern,'H');
cl(result);
*/

/*var str1 = "hello";
var arr1 = str1.split('');
cl(arr1);
var arr2 = arr1.reverse();
cl(arr2);
var str2 = arr2.join('');
cl(str2);*/

















