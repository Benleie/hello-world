
git clone指定分支
git clone -b refactor https://github.com/maroslaw/rainyday.js.git stop

发现创建一个新库，很简单。new repo,然后github在你没有readme的时候会有提示页面，照做就行。
git init一下，在github网上 new repo，然后
```
git remote add origin https://github.com/Benleie/books.git
git pull --rebase origin master(因为README.md不在本地文件目录)
git push -u origin master
```


查看gitconfig   git config --list



