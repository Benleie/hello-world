## HTMLElement.offsetParent 
+ 返回一个指向最近的包含该元素的**定位元素**

+ 根元素 标准模式下为 html；quirks 模式下为 body？经过测试，发现两种情况下都是body.

+ In HTML, :root represents the `<html>` element and is identical to the selector html, except that its specificity is higher.