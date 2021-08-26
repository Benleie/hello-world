# todo
## common Components
+ 组件理解
	+ 哪些组件需要appendto body
+ search-page
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
+ grid 数据刷新存在bug
+ 有的组件引入t-form-parse,不使用@ViewChild引入#parse指令?


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


## angular
+ process.argv 启动Node.js进程时传入的命令行参数 
	+ 第一个参数是process.execPath
	+ `/usr/local/bin/node`