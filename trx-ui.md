熟悉公司常用的组件和写法，罗列其中的技术点

# todo
+ spanned-table组件编写
	+ colspan应用探究
	+ 如何获取远程数据，配置表格内容
+ 对比组件知识点
	+ org-container的offsetWidth为何获取不到
	+ 参照knowledge-clue-tab页面，如何处理resize事件
	+ 还原最早ioc-detail页面，负边距敞开页面的场景
+ 团伙关系分裂图 getDivideDetail getDivideProfile
+ marker 分裂图箭头会覆盖 图谱关系箭头颜色

















	
## common Components
+ 组件理解
	+ 哪些组件需要appendto body
+ search-page
	+ `<ng-content select="[search-filters]"></ng-content>`
+ t-dialog
	+ .ui-dialog-content height
	+ appendto

+ t-grid
	+ 怎样处理表头field format
	+ table data刷新存在问题
		+ 刷新的时机在哪
		+ _data 存取器处理data导致了grid刷新异常？
+ form
	+ setValue和直接赋值有何区别 patchValue
+ httpClient
	+ subscribe 类型定义 `onRequest: (params?: any) => Observable<TableData>`

## form-designer
+ designer-panel [关于ExpressionChangedAfterItHasBeenCheckedError](https://segmentfault.com/a/1190000013972657)
+ grid 数据刷新存在bug
+ tags组件可以参考 tags-dialog


## angular
+ 待优化
	+ core.js:11210 WARNING: sanitizing unsafe URL value javascript: (see http://g.co/ng/security#xss)
		+ grid DomSanitizer
	+ WARNING in Circular dependency detected
	+ wait until bundle finished:
+ `<ng-content select="[search-header]"></ng-content>`
+ form

### 代码疑问 
```js

this.form = this.formBuilder.group({
  taskName: ['', [Validators.required]],
  taskDesc: [''],
  ipClues: ['', [this.ipValidator]],
  domainClues: [''],
  endTime: [undefined],
  dataSourceType: [[]]  // 该数据初识时应为[]
});

// ioc.component
onSizeChange(event) {
	// percentPageSize已经更新，通过属性绑定的方式传给percentGrid对应子组件
	// 但是在update$.next之后子组件rows属性才更新
	this.percentGrid.rows = this.percentPageSize
	this.percentGrid.update$.next(true);
}
```

## node && server
+ 
```bash
ng build
node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build
```




# done
## d3
+ vue引入d3,实现zoom

## common Components
+ t-grid
	+ 记录总条数 tableData total
+ dropdown
	
+ multiSelect 
	+ 第一次无法选中分组目录,是因为使用formGroup初始化value时没有将其设为空数组  
	+ `this.form = this.formBuilder.group(
	{ dataSourceType: [[]] });`


## form-designer
+ 修改form-designer表格可选
+ 有的组件引入t-form-parse,不使用@ViewChild引入#parse指令? 


## angular
+ process.argv 启动Node.js进程时传入的命令行参数 
	+ 第一个参数是process.execPath
	+ `/usr/local/bin/node`