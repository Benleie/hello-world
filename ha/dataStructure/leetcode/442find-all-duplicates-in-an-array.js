/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //利用哈希表进行数组去重   272ms
var findDuplicates = function(nums){
	let result = [];
    let hash = {};
	for(let i = 0; i<nums.length; i++){
		if(!hash[nums[i]])
			hash[nums[i]] = true;
		else 
			result.push(nums[i]);
	}
	return result;
};