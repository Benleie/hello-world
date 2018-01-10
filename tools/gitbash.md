
### git clone指定分支
git clone -b refactor https://github.com/maroslaw/rainyday.js.git stop

##创建一个新库，很简单。
在官网new repo,然后github在你没有readme的时候会有提示页面，照做就行。
git init一下，在github网上 new repo，然后
```
echo "# awecg.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/awecg/awecg.github.io.git
git push -u origin master
```
另:git pull --rebase origin master(如果创建库时生成了README.md，即README.md不在本地文件目录)



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
+ git remote set-url origin
+ git push -u origin master

查看gitconfig   git config --list/-l
查看远程仓库信息  git remote show origin
查看远程仓库 git remote -v
commit阅读利器gitk


## 经典问题
The file will have its original line endings in your working directory.
