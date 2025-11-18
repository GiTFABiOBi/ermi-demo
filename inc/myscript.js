jQuery(document).ready(function($) {

	var wW = $(window).width();
	
	
	// SCROLL SMOOTH
	$(window).on("scroll", function() {
		var scroll = $(this).scrollTop();

		//aggiunge bg a header
		if(scroll > 50) {
			$(".site-header").css("background", "rgba(255,255,255,.85)").css("box-shadow", "0 0 20px rgba(0, 0, 0, 0.05)");
		} else {
			$(".site-header").css("background", "transparent").css("box-shadow", "unset");
		}
		
		
		if(wW < 1200) {
			if(scroll > 30) {
				$(".my-header .logo img").css("width", "80px");
			} else {
				$(".my-header .logo img").css("width", "110px");
			} 
		}
		     
	});
	
	
	
	//HAMBURGER MENÙ
	$(".hamburger").on("click", function() {
		console.log('clicked!');
		$(this).toggleClass("is-active");
		//attiva/disattiva hamburger bars
		$(".hamburger-inner").toggleClass("not-active");
		//mostra menu che appare da SX
		//$(".hamburger-box").toggleClass("meno20");
		
		if($(this).hasClass("is-active")){
			//mostra menu che appare da SX
			$(".menu-mobile .my-nav-mobile").css("top", "0");
		} else {
			//nasconde menu che scompare a SX
			$(".menu-mobile .my-nav-mobile").css("top", "-150vh");
		}
	});
	
});