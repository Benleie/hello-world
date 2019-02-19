## variables
+ layout 定义四种screen大小，确定@grid-gutter-width为30px;d定义不同的Container大小

### core
+ scaffolding 脚手架   reset box-sizing;role="button"
+ grid主要用了mixin提供的几个


### grid 
+ .container-fixed();  container大小有媒体查询确定；
+ make-row();    Rows contain and clear the floats of your columns.
+ .make-grid-columns();  Common styles for small and large grid columns
+ .make-grid()  具体确定grid，默认为480px的超小屏

### mixin/grid
+ .container-fixed(); 确定左右margin和左右padding,extend(.clearfix all)
+ .make-row()   确定左右padding,extend(.clearfix all)

### mixin/grid-framework 
+ .make-grid-columns()设置并调用了col(),  position=relative
+ .make-grid() 调用.float-grid-columns()设置float: left;
调用calc-grid-column()的width,push,pull,offset分别设置width,left,right,margin-left


















