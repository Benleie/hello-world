## todolist
标签组件功能： 1.通过远程或本地等数据来源获取标签（可能需要分组）2.可单选可多选；
暂不考虑编辑和增删标签,用法类似于tags-dialog组件，作为表单的选择性组件

[ngStyle]="{right: isShowIp ? '15px' : '-400px'}
` *ngIf="" `

setValue

yyyy-MM-dd HH:mm:ss

注册关系、绑定关系、解析关系、投递关系、使用关系、控制关系、放马关系、
归属关系、已归属团伙关系、伴随关系、共现关系、其他

panel缩短
为什么有时候进来资源刷新不了
确定时需要填写信息

谈话内容：沟通不及时，程序员都不喜欢讲话；加班问题，工作量大了该加还得加；交付细节问题，领导只每周看结果；不知道你下班晚上做什么，该看书还得看，提升技术；及时提问，各种问题而不是很少问；一条船，交付不及时，会拖后腿；

+ 页面刷新时，iocDetail闪动
Constructors for derived classes must contain a 'super' call.

## 团伙分析
团伙资源图谱iocGraph，ioc没有sourceStatus




会议需求记录
1. 右侧相似团伙面板加入分裂按钮，点击显示分裂关系图
2. 点击"分裂"图标后，右边相似团伙面板只显示当前被分裂团伙，左边则显示分裂出来的团伙列表（右边展示，左边操作，与当前合并页面刚好相反？？）
3. 勾选分裂团伙，点击“确认”后，弹框，对选中分裂团伙逐个进行命名

迁移说明
项目来自hunt-ui-micro的gang分支,做了如下调整
1. 删除src/app下的form-designer、课题116、relation-plugins、survey、common/relation等，并修改config-generator.js
2. 删除common/relation/core
3. gang.module.ts





周报 11.08-11.12
16341910401691
https://echarts.apache.org/examples/zh/editor.html?c=area-time-axis
信息泄露，命令控制，漏洞攻击，恶意代码传播，DDOS攻击
https://www.cnblogs.com/eagle1098/p/12146688.html

echart的实现，是把dataZoom作为坐标系的一个辅助插件，依附于坐标系。好像没法作为一个独立的时间范围选择器，单独显示出来。

Fr 优化图例；图谱形状；Echart dataZoom Slider
Th tab样式 class优先级；flex换行样式
Tu 图谱加载；图例切换-inputSwitch;  ngStyle
Mo 优化资源图谱页面：背景色、图标、间距等;攻击图谱初始化与布局

周报 10.25-10.29
Fr 团伙名称等修改；多边形 
Th 了解攻击图谱页面，申请UI
We 编号继承单选框样式
Tu 资源图谱页面 更新面板； 编号继承；
Mo 资源图谱页面； 和后端沟通团伙编号继承相关接口；

周报 10.18-10.22
1. 迁移团伙项目，了解git submodule模式；
2. 修改对比确认页面分裂模式的样式问题和图谱操作面板比例
3. 添加团伙资源图谱页面；

+ Fr 
+ Th 迁移项目 了解submodule模式
+ We 面板伸缩问题
+ Tu 分裂问题 
+ Mo 迁移项目：遇到网络问题无法安装包

周报 10.11-10.15
1. 团队对比确认页面： 修改滚动面板样式，修改图谱箭头颜色覆盖
2. 表单生成器： 完善工具栏icon，更换模板搜索的样式风格

周报 09.26-09.30
1. 学习d3、svg相关用法，绘制攻击资源实体
2. 对比确认页面 新增团伙分裂功能，页面调整与接口对接

周报 09.22-09.24
1. 调整对比确认页面；
2. 解决标品-模型输出页面的表单校验bug;

周报 09.13-09.18
团伙分析-对比确认页：接口对接，页面完善、样式调整优化

+ 09.18 transform
+ 09.17 media

周报 09.06-09.10
1.完成spanned-table第一阶段开发
2.调查任务分析结果页面添加检索条件；线索管理模块添加拉取时间；
3.团伙分析 对比确认功能添加组件。



+ 09.09
	+ prod 线索管理 添加时间
+ 09.08 详情弹框
+ 09.07 
	+ 分析结果 检索条件
	+ 接手团伙项目
+ 09.06 spanned-table config暂时不需要api

+ 停用做成表单形式
+ copy 标品IOC停用
+ formDesigner配置 停用
+ formparse生成的表格在弹框关闭后不再刷新
	+ openDialog
	+ 为什么会调用iocList filter-panel组件onQuery emit之后，两个地方都接收了更新数据
	+ t-form-parse 内置Button如何控制dialog




+ 多项选择 选择数据从哪来AttrConfigItem 选完之后数据如何保存
+ http://10.7.192.120:7001/storeJson
+ https://10.7.194.200/#/hunt/IOC-manage?pageSize=10&pageNum=1&sortField=inTime&order=desc





+ getJson search_api调用了好几次？？
+ npm7安装hunt-ui一次，看看什么问题



### 表单控件怎样传筛选框的值
+ filter-panel
	+ form.value怎样从FilterItemComponent中获取呢？
+ filter-item文件中 BaseFilterItem定义了$change的一个Subject,在各个表单控件中进行next操作,在FilterItemComponent中的init中对其进行观察。
	+ 基于ControlValueAccessor
+ FormGroup FromControl FormArray
                 
+ t-filter-panel
	+ 属性指令 伪指令



## 熟悉项目
+ IOC详情选择
+ 系统颜色
+ 涉及到d3的主要是
	+ /relation/core/chart 进行了封装
	+ knowledge-graph等页面的引入使用
+ http://10.7.192.120

## other
+ AlarmModelFilterComponent



## log
周报08.30-09.03
熟悉formDesigner控件传参、数据加载等写法；
开发formDesigner标签组件和spanned-table组件
+ 09.03
	+ 跨行表格配置
+ 09.02
	+ 模仿Ioc-more组件的样式
+ 09.01
	+ 定位讨论t-form刷新问题;
	+ 引入spanned-table问题;
+ 08.31
	+ 引入之前的tags组件，结合tags-dialog分析进一步的需求
	+ openDialog依然不能解决grid数据刷新问题
+ 08.30
	+ formDesigner 远程数据配置传参

周报08.23-08.27
1.根据需求变动，完善IOC活跃度和调查任务的相关功能，包括IOC活跃度分页调整、调查任务的全部启动、IOC事件通知日志的优化、表格文字提示的数据格式修改等
2.结合formDesigner生成的弹窗模板的使用情况，学习生成器中的GridElement组件的写法，定位表格数据刷新的问题

+ 08.27
	+ 修改grid toolTip内数据无法format的问题
	+ 修改时间选择器问题
+ 08.26
	+ 探究parsed grid数据刷新问题
	+ 修改ioc活跃度分页
+ 08.25
	+ 修改ioc事件通知表格；
	+ 探究parsed grid数据刷新问题
+ 08.24
	+ 修改form-designer表格可选
	+ 探究parsed grid数据刷新问题
+ 08.23
	+ ioc事件通知日志
	+ t-multiSelect 初始数据 bug
	+ 调查任务 全部启用

08.16-08.20
1. 配合后端接口，完成IOC活跃度和调查任务线索下拉的需求；
2. 熟悉项目中表格、表单的用法，以及TUI多选下拉等常见组件，解决使用中出现的bug
+ 08.20
	+ 熟悉httpClient用法
+ 08.19
	+ mockdata for table
	+ 多选下拉和时间选择appendto
+ 08.18
	+ 多选分组下拉
+ 08.17
	+ 线索下拉
+ 08.16
	+ 合并代码回滚 遗漏代码
	+ 
+ 08.13
	+ 阿清 后两个接口
	+ org-ioc-import 数据来源
+ 08.12 
	+ 批量处理 org/ioc/offMonitor
	+ 入职培训会
	+ t-dropdown 传参
+ 08.11 
	+ rxjs debounceTime无效？
	+ 理清 org/ioc/offMonitor 修改逻辑

+ 08.05 form-designer添加Tags
+ 08.04 模板选择器dropdown与tab;
+ 08.03
	+ bug240;
	+ 模板选择器切换项目
+ 08.02 
	+ tab切换获取history；
	+ json文件怎么加载form的attr配置

+ 07.30 history基本功能
+ 07.29 viewChild；gitk比对提交历史；了解org-detail；
+ 07.28 学习表单传值；了解表单生成器；激活navicat;删除getClues
+ 07.27 datetimerange控件传值给form；两个get接口
+ 07.26 使用egg-mysql；初识datetimerange

+ 07.23 使用mysqljs建表




+ MYSQL数据库templateHistory表(project, template, json, time)
	+ project----ctx.request.body.project
	+ template-----ctx.request.body.json.JSON_FILE
	+ json------ctx.request.body.json
	+ time------系统时间









## 相关
+ wifi password 1409  talent-12AB2   打印机 172.16.2.3
+ 172.16.2.161
+ 172.16.2.236
+ DNS: 202.96.128.86

+ 邮箱 https://10.2.158.10  
+ gitlab https://192.168.66.211
+ 工时系统 excel  192.168.67.127
+ CRM系统 192.168.1.18   李奔14120 topsec@233
+ OA/CRM 臧莹 82776610

+ 禅道系统  https://10.7.194.200/   liben 123@abc# social@233
+ 知识共享平台 http://192.168.1.55/
+ liben 123@abc# 
	+ 产品化版本 https://10.7.194.200/
	+ 116课题版本 https://10.7.192.115/#/

### TUI
+ http://10.7.193.1:8888/topUI/#/home
+ http://10.7.193.1:8888/resources/tui-structure-doc/#/README





## 116
### 公司测试环境 10.7.192.120 账号：root 密码：111111
```bash
# 7001
set +o history;
export HISTTIMEFORMAT='%F %T '
cd /opt/form-backend/
```
+ root@10.7.192.115 Talent@116
+ ssh-copy-id root@10.7.192.120

```js
const data = {
	'a': [1, 2, 3],
	'b': [4,5,6],
	'z': [7,8,9]
}
/* this.dataSourceOptions = [
      { "流": [
        "原始数据按照计数"] 
      },
      { 
        "事件": [
        "木马僵尸",
        "网站后门",
        "网页仿冒",
        "移动恶意代码",
        "DDos攻击",
        "移动终端协议分析",
        "互联网+协议分析",
        "漏洞利用",
        "部门专项",
        "区域专项",
        "fghk",
        "传统互联网协议分析",
        "关口"
    	]}, 
      {
        "域名": [
          "IPv4 承载的关注数据的相关信息",
          "用户与虚假服务器之间",
          "客户到递归服务器"
        ]
      }
    ] */
```

