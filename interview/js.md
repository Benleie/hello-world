

### HTML5 为什么只需要写 <!DOCTYPE HTML>
HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为HTML4.01 基于 SGML。而 HTML5不基于SGML，因此不需要对 DTD 进行引用，但是需要 doctype来确定渲染模式。
HTML5的声明和4.01的strict声明---按照标准模式渲染；没有文档声明或者4.01的TF,FF声明---按照quirk模式渲染。可以通过document.compatMod查看。
+ HTML 4.01共有三种DTD:Strict,Transitional,Frameset
+ 实现向后兼容，(方便UA检测)开启标准渲染模式或者怪异模式.

+ 浏览器UA  JS客户端检测 用户代理检测  document.compatMode  navigator.userAgent
