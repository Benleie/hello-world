用mongod 运行数据库，--dbpath,--port是常用参数。默认是27017
可以用原生的MongoDB Shell操作数据库，也可以用STUDIO 3t这样的可视化界面。

## shell
用Ctrl+L或者cls命令来清屏

文档 集合 数据库
db.runoob.insert({'name':"tutorial"})
db.col.insert()
删除集合
show tables
db.XXX.drop()

显示集合
 db.col.find().pretty()

更新集合文档
 db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})

删除文档
 db.col.remove({'title':'MongoDB 教程'},1)

条件操作符  $type操作符

limit和skip方法
db.col.find().limit(2)  得到col集合的前两条文档




db.col.find().count()


db.col.find({}).limit(1)