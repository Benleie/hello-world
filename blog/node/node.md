### debug模式
+ backtrace, bt - Print backtrace of current execution frame显示调用栈，不包括require
+ restart 快速重启
+ repl 交互式
+ c继续


+ module.exports与exports
exports.camelCaseKeys = require('./camel_case_keys');
module.exports = entry;

## require.resolve
+ `fs.readFileSync(path.join(__dirname, './assets/some-file.txt'));`等同于`fs.readFileSync(require.resolve('./assets/some-file.txt'));`
+  省略了一道检查文件是否存在的工序 (fs.exists).
