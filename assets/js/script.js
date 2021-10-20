$(document).ready(function(){
	$("#exp-box").hide();
	$("#skills").click(function(e){
		e.preventDefault();
		$("#skill-box").show(100);
		$("#exp-box").hide(100);

	});

	$("#exp").click(function(e){
		e.preventDefault();
		$("#skill-box").hide(100);
		$("#exp-box").show(100);

	});


	$(".r-btn a").click(function(){
		$(".r-btn a").removeClass("active");
		$(this).addClass("active");
	});


	$(".slider").owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:false,
		autoplayTimeout: 1000,

		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});



	$('#header li a').click(function(e) {

		let tt = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(tt).offset().top
		}, 1000);

		e.preventDefault();
	});

//Nav bar code
$(document).ready(function(){       
	var scroll_start = 0;
	var startchange = $('#startchange');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$(".header").addClass("fixed-menu");
			} else {
				$('.header').removeClass("fixed-menu");
			}
		});
	}
});

$(".nav li a").click(function(){
	$(".nav li a").css("color", "#000");
	$(this).css("color", "red");
});


//Nav bar code about
// function navFunction(id, name){
// 	$(document).ready(function(){       
// 		var scroll_start = 0;
// 		var startchange = $(id);
// 		var offset = startchange.offset();
// 		if (startchange.length){
// 			$(document).scroll(function() { 
// 				scroll_start = $(this).scrollTop();
// 				if(scroll_start > offset.top) {
// 					$(".nav li a").css("color", "#000");
// 					$(name).css("color", "red");
// 				} else {

// 				}
// 			});
// 		}
// 	});
// }

// navFunction("#home",".home_menu");
// navFunction("#about",".about_menu");
// navFunction("#service", ".service_menu");
// navFunction("#portfolio", ".por_menu");
// navFunction("#blog", ".blog_menu");
// navFunction("#contact", ".contact_menu");









$(".top").click(function(){
	$("html, body").animate({
		scrollTop:0
	}, 1000);
});




});

