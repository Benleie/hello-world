总的过程可以看做6步：
1.操作系统通过键盘或者触摸屏捕获IO事件，将用户输入的url交付浏览器处理。
2.浏览器向网卡/网络适配器发送数据--通过DNS查询IP;构建HTTP请求报文；用SSL/TLS协议加密http报文;通过Socket发送TCP数据；
+ 构建HTTP请求报文；
3.从本机网卡发送到服务器--路由；CDN;
4.服务器对数据的处理并返回HTTP响应报文--负载均衡：LVS,反向代理；进入web server,router什么的
+ HTTP响应报文 状态码  
+ 基于socket的HTTP服务器
+ REST API
+ Paas Baas heroku
5.How browsers work--收到数据后，浏览器的处理
+ 浏览器根据数据包的`Content-Type`来决定如何解析数据


6.将浏览器渲染结果输出于显示屏


winter：而高手可以根据自己擅长的领域自由发挥，从URL规范、HTTP协议、DNS、CDN、到浏览器流式解析、CSS规则构建、layout、paint、onload/domready、JS执行、JS API绑定⋯⋯

+ 状态码：1表示消息；2表示成功；3表示重定向；4表示请求错误；5、6表示服务器错误。  文章：choosing-an-http-status-code


#### 关于REST API
+ REST Representational State Transfer
+ 资源url  表现形式-文件格式  转换get/post/put/patch/delete
+ 请求头中Accept和Content-Type字段指定表现形式
+

#### 前端路由
+ 传统路由 url-路径-资源  服务器渲染 .asp .php
+ 异步体验 ajax 单页应用 MVVM  PWA:离线应用
