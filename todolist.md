
## 公司电脑
+ sequelize ORM工具
+ Primitive
+ chrome://sync-internals/

## form-designer
+ tags无法及时获取tags-config中的值
+ multicheckbox选中值之后不能反应在json中？

+ formDesigner中怎样修改form.template值
+ t-dropdown show-clearable 点击后无数报错

### 设计器参考
+ https://github.com/JakHuang/form-generator
+ https://github.com/GavinZhuLei/vue-form-making

```
npm list @angular/core
npm ERR! peer dep missing: @angular/core@^2.1.0 || ^4.0.0, required by ng2-codemirror@1.1.3
```


## 08
### git
+ 通过rebase对commits进行合并
+ 创建本地branch开发完合并时总是 non-fast-forward
+ 

### 语言基础
+ 正则表达式 类似于vscode搜索文件的一个匹配
+ 类似于setTimeOut 0 的写法`Promise.resolve(null).then( ()=> {this.parentComponent.text="update message"});`
+ angular @input set get  tags-element
+ ts extends 不可以重写属性，但可以重写方法 implements则都可以重写

### CSS
+ `font-size: 14px; height: 14px;`
+ `background-color: rgba(255,255,255,.8);
  // opacity: 0.8;` 容易被子元素继承
+ RGBA 颜色值指定为：rgba(red, green, blue, alpha)

### http
+ 浏览器 options preflight
+ DOMContentLoaded load


### 三大框架
+ angular 弹窗ngif 与vue对比
+ A constructor, method, accessor, or property was expected.
+ `<ng-content select="[search-header]"></ng-content>`
+ ng-template let  t-table中经常使用 [](https://stackoverflow.com/questions/42978082/what-is-let-in-angular-2-templates)
	+  let-rowData let-columns let-rowIndex="rowIndex"
+ angular的双向绑定 需要对事件绑定加重复的xxxOnchange吗 control-attibute中的用法为何无法生效
+ angular rxjs 防抖节流怎样使用
  + 使用next 绑定input的input事件，这种用法没错！错在诡异而奇怪的input组件
  + 一个简单input 怎么那么多触发 常见组件是怎样处理input的防抖节流的
```js
constructor(cdr: ChangeDetectorRef, private http: HttpClient) {
	super(cdr);
}
```


### 动动小手进行开发
+ 结合vue-elelment-admin，仿写一套ngx-admin的layout布局
+ http获取本地json,设置筛选框form查找表格
+ 禅道bugs下拉框 带默认选项
+ 都城送 选两菜面板 是通过什么组件实现的 类似于下拉多选？
+ todomvc-vue

### 常用写法总结与复习
+ date-fns 与 moment.js 使用类比
+ http-client XHR fetch axios
+ egg-mysql  ali-rds
+ 一个.vue文件梳理vue官方教材的例子






+ 梳理zhikun工作用到的技术
  + 印象深刻的技术难点
  + vant写三个页面



## 网易云项目
+ [ ] 写首页
+ 梳理各个API对应页面




## Node server
+ N-blog项目 启动与整理


## done
+ angular 弹窗ngif 与vue对比
+ 通过rebase对commits进行合并
+ button -> fetch -> egg.js -> mysql
+ 自己电脑连接公司VPN和gitlab
+ mock data
	+ table: id name duration chinese math english memo