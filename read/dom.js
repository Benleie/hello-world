console.log('hhh');
$(function(){
	// console.log($('ul li:eq(1)').text()); //banana
	// console.log($('ul li'))  //object{ }
	// console.log($('p').attr('title'));
	// console.log($("<li></li>"))  //Object [ <li> ]
	$("#fruit ul").append($('<li>meton</li>')).append($('<li>pear</>'))
	// console.log($('ul li')); //Object{ <li>...}
	// console.log(typeof $('p'))   //object
	// console.log($('p'))  //Object { 0: <p>, 1: <p>, 2: <p>, length: 3, prevObject: Object[1] }
	$("#fruit ul li").click(function(){
		console.log(this);
		$(this).clone(true).appendTo("ul");
	})
	// console.log($('p').hasClass('what')) //false
	// console.log($('p').is('what'))  //false

});
window.addEventListener('load',function(){
	// console.log(document.getElementsByTagName('ul')[0].firstChild.nextSibling.innerHTML)
	      //apple
	// console.log(document.getElementsByTagName('ul')[0].firstChild.nextSibling.nextSibling.innerHTML);
	// console.log(document.getElementsByTagName('ul')[0].firstChild);
	/*var ele1 = document.getElementsByTagName('ul')[1];
	var ele2 = document.getElementsByTagName('ul').item(1);
	console.log(ele1 == ele2)  //true  */
	// console.log(document.getElementsByTagName('ul').toString())    //[object HTMLColletion]
	// console.log(document.getElementsByTagName('ul')[0].childNodes)
	// console.log(typeof document.getElementsByTagName('p'));  //object
	/*{
		// console.log(document) //HTMLDocument ->dom.html
		// console.log(window) //Window ->dom.html

		document.addEventListener('click',function()
		{
			console.log(this)
		},false);
	}*/
	{
		//console.log(document.getElementsByTagName('ul')[0].childNodes)   //NodeList[ ]
		var p = document.getElementsByTagName('p')
		//console.log(p)  //HTMLCollection [ <p>, <p>, <p> ]
		var arr = [];
		var obj = { };
		Array.prototype.push(obj, p[0]);
		for(let i = 0; i<p.length; i++)
		{
			if(p[i].nodeTypes == 3) continue;
			arr.push(p[i]);
			// Array.prototype.push(obj, p[i]);
		}
	
		// console.log(arr) //Array [ <p>, <p>, <p> ]
	    // console.log(typeof arr)  //object
	}
	     
	/*arr.addEventListener('click',function(){
		console.log('hhh')
	},false);*/
	// console.log(document.getElementsByTagName('ul')[0].firstChild)

},false);





