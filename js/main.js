$(document).ready(function(){
	//导航栏保持
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if(scrollPos > 0){
			$("header").addClass("narrow-header")
		}
		if(scrollPos == 0){
			$("header").removeClass("narrow-header");
		}
	})
})