[雯莉](http://zhangwenli.com)的聊天界面设计很有特色。将代码clone下来，chrome报了zepto的getJSON()跨域失败的错：
`zepto.js:1519 Failed to load file:XXX/assets/dialog.json: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.`。火狐则直接跑了起来。

看来不能直接用浏览器打开，要用locallhost访问。于是`npm i -g http-server`全局安装服务器模块，然后在该目录下运行`http-server`即可！


#### 结构
+ index.html:定义了包含vue指令的聊天div；用SVG做了六个LOGO；引用zepto,vue两个库，然后是index.min.js。
+ assets/dialog储存聊天内容。
+ src/index.js 用vue实现聊天功能，但是不知如何被引入。。。
+ 2014/2015/2016主要是三个动画

