## 第三章 DOM
+ host object:浏览器内建对象，主要有window对象，主要讨论window对象的document对象。
+ M:模型，节点树 元素节点 文本节点 属性节点
NODE对象的nodeType属性定义了十二种节点，MDN推荐使用七种：1.Element,3.Text,7.PROCESSING_INSTRUCTION_NODE,8.comment,9.document,10.DocumentType,11.DOCUMENT_FRAGMENT_NODE.

document对象的方法
+ getElementById 返回 a reference to an Element object
+ getElementsByTagName 返回  an live HTMLCollection of elements对象数组 使用通配符获取所有标签数(包括head)
+ getElementsByClassName 返回an live HTMLCollection。 
getElementsByTagName和getElementsByClassName方法所有element均可使用

element.getAttribute  setAttribute()


