---
title: ajax
tags:
  - javascript
  - http
---
关于ajax，json的后端数据处理。
+ ajax与HTTP请求的区别

### JSON-server,superagent,axios的作用区别？
+ axios:Promise based HTTP client for the browser and node.js
理由:jquery自3.0版本才支持Promise,如果你只是想使用jquery的ajax的话引入整个jquery是很大的负担，所以axios是一个很好的工具。(axios代码量只有jquery的十分之一，减少执行时间)。同时提供了其他features。
