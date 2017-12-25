sort函数可以传入function，灵活排序。

```javascript
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2) {
    var curLen = arr1.length;

    if(curLen === 0)
        return arr2.sort(function(a,b){
            return a[1] > b[1];
        })

    for(var i = 0; i < arr2.length; i++){
        for(var j = 0; j < curLen; j++){
            if(arr2[i][1] === arr1[j][1]){
                arr1[j][0] += arr2[i][0];
                break;
            }
            if(j === curLen - 1)
                arr1.push(arr2[i]);
        }
        
    }

    arr1 = arr1.sort(function(a,b){
        return a[1] > b[1];
    });

    return arr1;
}

updateInventory(curInv, newInv);
```