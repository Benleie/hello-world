---
title: again
tags:
  - hexo
  - node.js
---

+  `--debug`会生成debug.txt~~,记录一些无聊的东西~~

###  hexo.js是从哪里开始加载的？
我不得不对此感到疑惑？
hexo命令不显示hexo.js中的console.log!!!与`node debug ./node_modules/hexo/bin/hexo g`略有不同
hexo.js完成的任务主要有new Hexo(),init(),exit().


## 配置hexo.
+ hexo init即可快速开始一个库，如果仅仅是调试的话用他就够了。
安装hexo-deployer-git后，created a lockfile as package-lock.json. You should commit this file。
这是npm模仿yarn的版本锁定，可以还原开发环境。
+ 创建next这样的子目录时，需要同时修改url和root，按照提示即可


+ 当我把config中的url的root设为空时，`Cannot read property 'replace' of null`hexo\lib\hexo\load_config.js:34:30.原来是这玩意儿在解释YHML，加载配置。
+ github显示还是benleie在提交这个项目？？
修改config的用户名解决
+ 如何设置url的root，让它成功到blog目录？？
新建一个库,开启github pages,然后将blog加到url和root后面
### 问题很多


+ hexo加载了hexo-renderer-stylus模块来编译CSS，但是yilia使用了SCSS??
