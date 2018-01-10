## 使用多个git账号
+ 创建公钥和密钥`ssh-keygen -t rsa -f test -C "test key"`创建公钥和密钥
+ $ ssh-agent bash
	$  ssh-add ~/.ssh/test
	Identity added: /c/Users/我/.ssh/test (/c/Users/我/.ssh/test)
+ 配置ssh的config文件

```
$ ssh -T git@github.com
Hi Benleie! You've successfully authenticated, but GitHub does not provide shell access.
```


## 调试
+ ssh git@github.com -vT
大概过程如下，先读取config，与server建立连接;然后认证，在/.ssh/known_hosts里面找到key与Server host key匹配，发送报文，本地的.pub公钥与server的publickey匹配，认证完成。远程主机gitHub不提供shell操作。
```
Reading configuration data /etc/ssh/ssh_config
Connection established.
Authenticating to github.com:22 as 'git'
Host 'github.com' is known and matches the RSA host key.
Found key in ../.ssh/known_hosts:1
Authentications that can continue: publickey
Authentication succeeded (publickey).
Authenticated to github.com ([192.30.255.113]:22).
```
## 疑问
+ awecg.com的库config信息显示有whu和qq两个邮箱，用 git clone git@搞下来,config信息就只有qq了。
每次commit都会用用户名和邮箱纪录,github的contributions统计就是按邮箱来统计的。
所以得手动修改git config user.name等。












+ git remote set-url origin
+ git push -u origin master



+ hexo如何获取ssh数据
