$(document).ready(function(){
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