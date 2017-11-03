## 阮一峰express动态模板学习

app.use(express.bodyParser());
产生错误
```
(node:8540) DeprecationWarning: connect: multipart: use parser (multiparty, busboy, formidable) directly
(node:8540) DeprecationWarning: connect: limit: Restrict request size at location of read
```
注释掉之后还能跑。所以bodyParser作用何在？

安装body-parser,
app.use(bodyParser());后又遇到问题
```
body-parser deprecated bodyParser: use individual json/urlencoded middlewares index.js:11:9
body-parser deprecated undefined extended: provide extended option node_modules\body-parser\index.js:105:29
```
于是设置参数。