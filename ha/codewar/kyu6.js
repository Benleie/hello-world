function tribonacci(signature,n){
	let arr = [],
		len = arr.length,
		num1 = signature[0],
		num2 = signature[1],
		num3 = signature[2]
	if(n<3){
		for(let i = 0; i<n; i++)
			arr.push(signature[i])
	} else {
		for(let i = 0; i<3; i++)
			arr.push(signature[i])
		while(arr.length < n){
			let num4 = num1 + num2 + num3;
			arr.push(num4);
			num1 = num2;
			num2 = num3;
			num3 = num4;
		} 
	}
	return arr
}
function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); 
  }
  return signature.slice(0, n); //return trib - length of n
}
cl(tribonacci([1,1,1],10))








