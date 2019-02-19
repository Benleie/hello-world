let cl = console.log
let bt = document.getElementById('button')
let p = document.getElementsByTagName('p')[0]
let div = document.getElementsByClassName('first')[0]
p.addEventListener("click",function(e){
	div.appendChild(document.createElement('p'))
	console.log("ppp! " + div.childNodes.length)
},false)
// cl(document.styleSheets)    //StyleSheetList [ CSSStyleSheet ]

cl(div.childNodes.length)











