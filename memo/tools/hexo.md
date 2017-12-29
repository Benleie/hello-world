+ hexo generate相当于调用gulp工具，结合yml的配置生成到.deploy_git(hexo-deployer-git)和public文件夹，然后deploy就是把.deploy_git库commit以及push。

### 核心库
+ hexo---->hexo-cli---->lib---->hexo.js