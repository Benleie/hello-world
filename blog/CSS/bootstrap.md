---
title: bootstrap
tags: UI
---
+ modal如何显示在屏幕正中心？

## 简书
+ tooltip，只有一个左下角方向的显示??`$('[data-toggle="tooltip"]').tooltip('show')`,发现压根就没有激活.
+ 如果没有data-placement，默认top;如果data-placement为"",默认right?
+ tooltip的字体大小，背景颜色。。
+ **@link-hover-color**   style标签的a:hover不能改变navbar-nav里a的背景颜色，只能用JS改变inline-style了。
+ rgba(0,0,0,.65) opacity;
+ calc(100% - 85px)
+ 无法用%设置textarea的height,无论是style标签还是js。
+ textarea下面莫名其妙留出一段空白。display：block；


## 试着用carousel做轮播图。

+ carousel-indicators完全没用是吧？
+ 用`img {height:400px}`无法修改图片大小，可能bootstrap做了优先级更高的imporant的设置吧。如何解决图片大小适应问题？

鼠标悬停会影响轮播；
