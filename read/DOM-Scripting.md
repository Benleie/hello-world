## 第三章 DOM
+ host object:浏览器内建对象，主要有window对象，主要讨论window对象的document对象。

+ M:模型，节点树 元素节点 文本节点 属性节点
NODE对象的nodeType属性定义了十二种节点，MDN推荐使用七种：1.Element,3.Text,7.PROCESSING_INSTRUCTION_NODE,8.comment,9.document,10.DocumentType,11.DOCUMENT_FRAGMENT_NODE.

document对象的方法
+ getElementById 返回 a reference to an Element object

+ getElementsByTagName 返回  an live HTMLCollection of elements对象数组 不是正常数组，不能map。
使用通配符获取所有标签数(包括head)  

+ getElementsByClassName 返回an live HTMLCollection。 
getElementsByTagName和getElementsByClassName方法所有element均可使用

element.getAttribute  setAttribute()


## 第四章
+ 怎样把图片靠在屏幕底端？ 另：我的屏幕,innerHeight为628px;
 靠在底端，当然是用绝对定位啦。 bottom:0;


+ 鼠标出现在a链接上，浏览器默认在左下方显示地址。怎样阻止这个动作?
用onmouseover监听一个`return false`函数并不管用啊。

+ map不改变原数组大小？！！

CSS设置图片大小时，只需要设置witdh,height会自动根据像素比调整。反之亦然。
onclick="return false;"阻止click事件的默认动作，比如a的点击即跳转。    

NODE==>Element常用属性    
childNodes,每一个element都被text节点包围；
属性节点，nodeType2已被废弃
NodeType属性：element节点——null;Text节点——content of the text node。

[实操效果](http://hhh.awecg.me/my/show/domscript_4.html)

