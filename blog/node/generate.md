---
title:  generate
tags: hexo
---
node debug ./node_modules/hexo/bin/hexo g
+ hexo g --debug


## loadPlugin
+ 是谁在调用loadPlugin?  load_plugins.js!
loadModuleList将package.json中的dev提取出来，在loadModules中调用ctx.loadPlugin(path)进行map.
至于loadPlugin,既是module又是vm的，很吓人。
+ runInThisContext
var fn = vm.runInThisContext(script, path);
是在\\hexo-deployer-git\\index.js的path下执行它自己：hexo.extend.deployer.register('git', require('./lib/deployer'));register结束后可以在self.extend.deployer.store访问到这么一个东西：
`{ git: [Function: val] }`.









## hexo generate过程
+ hexo-fs是自己定义的file库
+ hexo-util   CacheStream()

hexo/extend
hexo/plugins
hexo-renderer-ejs   ejs


## 构造函数们
#### Console()
+ hexo-cli/lib/extend/console
+ this ---store,alias
+ prototype --- get,list,register
+ hexo.extend.console

#### Box()
+ EventEmitter.call(this);
+ require('util').inherits(Box, EventEmitter);






#### Hexo()
+ hexo.log.debug/info
###### this
+ this.source = new Source(this)    继承BOX
+ this.theme  | this.locals
+ EventEmitter.call(this);

###### init()
+ require('../plugins/console')(this);这样加载六大插件
+ 调用load_config,load_plugins，update_package，然后execFilter('after_init',...)  this.extend.filter
+ emit("ready")
###### load()
一切plugins和extend都加载好后
+ loadDatabase    hexo.database  .options .load()
+ self.source.process(), self.theme.process()




######  `Hexo.prototype._generate()`
+ emit -- generateBefore | generateAfter
+ return self.execFilter('after_generate', null, {context: self});
