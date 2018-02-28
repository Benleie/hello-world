Vue教程

+ 想实现一个窗口可以自由拖动的简单编辑器;不断变化的时间；走钟；




当通过计算属性改变数据过于复杂时可以用watch来监听数据。
toggle是怎样切换的？每次通过this直接更改一次loginType的值？

声明式渲染：message为什么被console可以随时更新？(updated)

指令：v-bild,v-if,v-for,v-on
v-model实现表单输入和应用状态之间的双向绑定(updated)

data properties：实例接受参数，当参数指向的数据发生变化时，view将重新渲染。

声明周期图




## 计算属性和观察者
data和computed下的变量,can both be acceesed by instance vm.

For computed and methods,`:function` can be ignored.

计算属性默认只有 getter,用来return 

#### watch
+ { [key: string]: string | Function | Object | Array }
+ 用于对象时，deep  handler  immediate 


+ 每当触发重新渲染(updated)时，调用方法将总会再次执行函数。


## 模板语法
#### 插值
数据绑定   “Mustache”语法   v-once    v-html
+ HTML特性   v-bind

#### 缩写
v-bind对应:    v-on对应@



## 事件处理
+ 用在普通元素上时，只能监听原生DOM事件。



#### filters
+ `{{ message | show }}`，如果show在methods中定义，会显示`Failed to resolve filter:`.


## 组件
+ 提高代码复用
+ 对象作为props,可以进行类型检测。
+ Component template should contain exactly one root element.
+ 父子组件:组件 A 在它的模板中使用了组件 B。

#### 定义组件模板的方法： 
字符串，ES6模板字面量，script/x-template,JavaScript内联模板,render函数，JSX,.vue组件


