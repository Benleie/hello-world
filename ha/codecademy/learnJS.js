function main() {
  $(".skillset").hide();
  $(".skillset").fadeIn(2000);
  $('.projects').hide();            
  $('.projects-button').on('click', function() {
	 //$(".projects").show();    //问题：点一下全都出来了...
	 //$('.projects-button').toggleClass('active');//击变化
	 //$(".projects").toggle();
	 //$(this).next().toggle();
	 $(this).toggleClass('active');
	 $(this).text("已阅");
	 $(this).next().slideToggle(600);
	});
}

//$(document).ready(main);
$(main());    //简写形式；
