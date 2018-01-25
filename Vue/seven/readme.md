Vue教程

+ 想实现一个窗口可以自由拖动的简单编辑器;不断变化的时间；走钟；




当通过计算属性改变数据过于复杂时可以用watch来监听数据。
toggle是怎样切换的？每次通过this直接更改一次loginType的值？

声明式渲染：message为什么被console可以随时更新？
指令：v-bild,v-if,v-for,v-on
v-model实现表单输入和应用状态之间的双向绑定

data properties：实例接受参数，当参数指向的数据发生变化时，view将重新渲染。
声明周期图




## 计算属性和观察者
data和computed下的变量,can both be acceesed by instance vm.

For computed and methods,`:function` can be ignored.

计算属性默认只有 getter,用来return 

watch除了deep(用于对象)，还有个强大的handler.官方文档竟然只字未提？ 


+ 对于显示时间，计算属性和方法都没有触发重新渲染？说好的方法与缓存无关呢？


## 模板语法
#### 插值
数据绑定   “Mustache”语法   v-once    v-html
+ HTML特性   v-bind

#### 缩写
v-bind对应:    v-on对应@








