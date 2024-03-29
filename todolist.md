
### 设计器参考
+ https://github.com/JakHuang/form-generator
+ https://github.com/GavinZhuLei/vue-form-making



# sort out

## todoList
### git
+ 通过rebase对commits进行合并
+ 创建本地branch开发完合并时总是 non-fast-forward
+ 

### 语言基础
+ 正则表达式 类似于vscode搜索文件的一个匹配
+ 类似于setTimeOut 0 的写法`Promise.resolve(null).then( ()=> {this.parentComponent.text="update message"});`
+ angular @input set get  tags-element
+ ts extends 不可以重写属性，但可以重写方法 implements则都可以重写
+ 动态给object添加属性 Index Signatures
+ interface LooseObject {
    [key: string]: any
}
+ `const a : Record<string, string> = {}`
+ https://github.com/aershov24/typescript-interview-questions

### browser
+ mouseenter focus事件的区别
+ https://zhuanlan.zhihu.com/p/26536815 event delegation
+ 浏览器 options preflight
+ DOMContentLoaded load
+ 感受close、右键、复制事件
+ 

### CSS
+ 无限滚动长列表  
+ 结合autocomplete，分析transition的触发场景
+ flex wrap之后，最后一行无法左对齐
+ 请教一个问题：如果去后台请求一个服务并进行前端处理，需要耗费较长的时间。如何实现在等待处理的这段时间内加一个等待动画，而又不影响到前端的处理呢？
+ PC端通过使用vh和em 是不是可以一定程度上做到适配
+ ::webkit-scrollbar
+ background box background-clip background-origin
+ css变量 env()函数 var() -- 
+ svg viewbox
+ 背景颜色
	+ CSS中无法直接给背景图片加opacity属性 通过伪元素
	+ backdrop-filter filter

## 组件库
+ 常见组件是怎样处理input的防抖节流的
+ element dialog是怎样懒加载的？
+ checkbox圆形按钮怎样实现





### 三大框架
+ https://github.com/zuiidea/antd-admin
+ https://vue3js.cn/global/nextTick.html
+ ngAfterContentChecked为啥会在resize后触发
+ ngAfterContentChecked 多个生命周期不用继承也不会报错 implements
+ Cannot find a differ supporting object '[object Object]' of type 'object'. NgFor only supports binding to Iterables such as Arrays
+ vue ref的作用是什么 我直接querySelector获取DOM不行吗
+ ElementRef 获取DOM元素
+ ngAfterContentChecked ngAfterViewChecked有何区别
+ A constructor, method, accessor, or property was expected.
+ `<ng-content select="[search-header]"></ng-content>`
+ ng-template let  t-table中经常使用 [](https://stackoverflow.com/questions/42978082/what-is-let-in-angular-2-templates)
	+  let-rowData let-columns let-rowIndex="rowIndex"
+ angular的双向绑定 需要对事件绑定加重复的xxxOnchange吗 control-attibute中的用法为何无法生效
+ angular rxjs 防抖节流怎样使用
  + 使用next 绑定input的input事件，这种用法没错！错在诡异而奇怪的input组件
  + 一个简单input 怎么那么多触发 常见组件是怎样处理input的防抖节流的
```
constructor(cdr: ChangeDetectorRef, private http: HttpClient) {
	super(cdr);
}
```


### 动动小手进行开发
+ element-plus安装 4
+ 结合vue-elelment-admin，仿写一套ngx-admin的layout布局
+ http获取本地json,设置筛选框form查找表格
+ 禅道bugs下拉框 带默认选项
+ 都城送 选两菜面板 是通过什么组件实现的 类似于下拉多选？
+ todomvc-vue
+ 模仿t-checkbox，体会onChange事件触发
+ json-server怎么post数据
+ https://github.com/snayan/canvas-demo

#### css动画
+ 页面跳至最前 又跳回来 参考zxx requestAnamation的文章
+ close-icon hover 旋转


### 常用写法总结与复习
+ date-fns 与 moment.js 使用类比
	+ 入职时间 入职时长
+ http-client XHR fetch axios
+ egg-mysql  ali-rds
+ 一个.vue文件梳理vue官方教材的例子



+ computed integrity doesn't match our records
	+ yarn cache clean
	+ yarn --update-checksums
	+ yarn install


+ 梳理zhikun工作用到的技术
  + 印象深刻的技术难点
  + vant写三个页面



## 网易云项目
+ [ ] 写首页
+ 梳理各个API对应页面




## Node server
+ N-blog项目 启动与整理 
+ 改造vue-cli,使用mockjs搭建mock server https://juejin.cn/post/6844903590046203918
### express实现常见功能
+ 连接mysql，提供几个接口
+ token授权登录
+ http2
+ websocket
+ server-sent events
