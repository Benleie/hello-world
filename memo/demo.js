function cl(some){
	return console.log(some);
}
/*window.onload = function(){

	$().getTagName('body').css('backgroundColor','lightgray');
	cl($().getId('box').css('backgroundColor','lime').css('margin-top','59px'));
	cl($().getTagName('p').html('haha').elements.length); //3
	$().getTagName('p').html('eee').click(function(){cl('hh');}).css('backgroundColor','cornsilk');
}*/

/*window.onload = function(){
	var base = new Base();
	//cl(base.getId('box').css('color','lime'));
	cl(base.getTagName('p').css('color','orange'));
	//cl(base.getId('box').css('color','lime').css('backgroundColor','lightgray'));
	cl(base.getTagName('p').elements.length);//4??
	cl(base.getTagName('p').css('margin-left','100px').elements.length);
	//base.getTagName('p').css('margin-left','50px').html('caption');
	base.getId('box').click(function(){
		cl('hh');
	}).css('backgroundColor','maroon');
}*/

cl(document.getElementById);
window.onload = function(){

	$().getTagName('body').css('backgroundColor','lightgray');
	cl($().getId('box').css('backgroundColor','lime').css('margin-top','59px'));
	cl($().getTagName('p').html('haha').elements.length); //3
	$().getTagName('p').html('eee').click(function(){cl('hh');}).css('backgroundColor','cornsilk');
}
/*window.onload = function(){
	cl($);
	cl($);
}*/
/*//每次点击都是+2 ???
window.onload = function(){
	//cl($());
	$.getTagName('body').css('backgroundColor','lightgray');
	cl($.getId('box').css('backgroundColor','lime'));
	cl($.getTagName('p').elements.length); //3
	$.getTagName('p').click(function(){
		cl('hh');
	}).css('color','fushcia'); //can't change the color
}*/




/*
	//css,html,click等方法返回的均是Base对象,
		//而不是一个元素节点对象;
window.onload = function(){
	// cl(Base.getTagName('p')[0].innerHTML);
	
	Base.getId('box').css('color', 'red').css('backgroundColor','black').html('pox')
	.click(function(){alert('NB');
	});

cl(Base.getId('box'));  //Base is not defined??
}
*/