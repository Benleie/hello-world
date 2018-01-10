hexo = node ./node_modules/hexo/bin/hexo
node debug ./node_modules/hexo/bin/hexo g
hexo---->hexo-cli---->lib---->hexo.js


+ hexo generate相当于调用gulp工具，结合yml的配置生成到.deploy_git(hexo-deployer-git)和public文件夹，然后deploy就是把.deploy_git库commit以及push。

+ The file will have its original line endings in your working directory.
跟theme的layout竟然没关系，vexo主题的line endings就是windows..




plugins/processor/index
```
  function register(name) {
    var obj = require('./' + name)(ctx);
    processor.register(obj.pattern, obj.process);
  }
```
