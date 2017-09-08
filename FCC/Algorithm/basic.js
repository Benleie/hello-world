
/*function palindrome(str){
	
	//var str1 = str.replace(/(^\s*)|(\s*$)/g, '');\
	str = str.replace(/\s/g,'');
	str = str.replace(/[\,|\.|\_|\\|\/|\:|\-|\(|\)]/g, '');
	var str1 = str.toLowerCase();
	if(str1 !== str1.split('').reverse().join(''))
		return false;
	cl("yes");
}
palindrome("0_0 : (/-\ : )0-0");*/


//还有更简单的方法，用replace()
/*function titleCase(str){
	var arr = str.toLowerCase().split(' ');
	str = arr.join(' ');
	var strAll = '';
	for (let i = 0; i<arr.length; i++){
		var str1 = arr[i].toString();
		str1 = str1.substring(0,1).toUpperCase() +
			str1.substring(1);
		strAll += str1 + ' ';
}

	console.log('|'+strAll.replace(/\s$/,'')+'|');
}
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");*/


/*function destroyer(arr) {
	//var emp = ['abs', 'dsf', 'fd', 'get'];
	//console.log(emp.__proto__);  //Array [ ]
	var args = Array.prototype.slice.call(arguments, 1);
	function notEqual(num){
		var count = 0;
		for(var i = 0; i<args.length; i++){
			if(num == args[i])
				count++;
		}
		return count == 0;
	}
	arr = arr.filter(notEqual);
	console.log(arr);
}
destroyer([1,2,3,1,2,3],2,3);
destroyer(["tree", "hamburger", 53], "tree", 53);*/

/*function chunk(arr, size) {
  var len=Math.ceil(arr.length/size);//新数组的长度；
  var n = new Array(len);
  console.log(arr);
  for(var i = 0; i<len-1; i++){
  	n[i] = arr.slice(i*size,(i+1)*size);
  }
  n[len-1] = arr.slice((len-1)*size);
  //arr = [].push(n);
  //console.log(arr);   //1???
  arr = [];
  Array.prototype.push.apply(arr, n);
  //var l = [[1,2,3],[4,5]];
  //console.log(l);
  return arr;
}
chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);*/


/*function slasher(arr, howMany) {
	arr = arr.slice(howMany);
	return arr;
}
slasher([1, 2, 3], 2);
slasher([1, 2, 3], 4);*/


/*function mutation(arr) {
	var str1 = arr[0];
	var str2 = arr[1];
	var array = str2.toLowerCase().split('');
	for(var i = 0; i<array.length;i++){
		if(str1.toLowerCase().indexOf(array[i]) === -1)
			return false;
	}
	console.log(array);
  	return true;
}
mutation(["hello", "heo"]);
mutation(["Mary", "Aarmy"]);*/

//console.log(NaN == NaN)
/*function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  console.log(arr);
  function my(value){
    return value != undefined && value!=null && value!==0 &&
    value!=false && value==value && value !='';
    
  }
  arr = arr.filter(my);
  console.log(arr);
  return arr;
}

bouncer([false , 66, 0, 'hh']);
bouncer([false, null, 66, 'hh', 0, NaN, undefined, ""]);*/

