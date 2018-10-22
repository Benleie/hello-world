命令行输入node，即可进入REPL.

异步回调惯例：几乎所有的回调函数，第一个参数都是error.

`process.cwd()`返回项目根目录； `__dirname``__filename`返回当前代码目录

全局变量
```js
(function (exports, require, module, __filename, __dirname) {
  //your code
}
```
