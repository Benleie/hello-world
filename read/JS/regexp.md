删除首尾空格的写法  
```javascript
var str = '   hhh    '

str.trim()    //1.简单粗暴

var pt = /^\s*(.+?)\s*$/;
str = pt.exec(str)[1]       //2.使用exec方法的属性
str = str.replace(pt,'$1')  //3.使用$兄弟分组捕获

str = str.replace(/^\s*|\s*$/g,'')  //4.trim的polyfill写法
```















