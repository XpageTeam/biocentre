import $ from "jquery"
import is from "is_js"
import "selectize/dist/js/selectize.min.js"
import "slick-carousel"
import Swiper from "swiper/dist/js/swiper.js";

import "./tabs.js"
import "./forms.js"


window.$ = $;
window.jQuery = $;

require("./countTo.js");
require("./jquery.fancybox.js")
require("./jquery.menu-aim.js")

require("swiper/dist/css/swiper.min.css")
require("slick-carousel/slick/slick.css")
if (!is.touchDevice())
	require("selectize/dist/css/selectize.css")
require("../css/jquery.fancybox.css")


let scrollTimeout;

document.addEventListener("DOMContentLoaded", e => {


	$("body").on("change", ".forms__input-calendar input", function(e){

		var inputHasFile = $(this).val();

		if(inputHasFile.length){
			$(this).closest('.forms__input-calendar').addClass('js__have-content');
		}

	});

	$('body').on('click', '.testemonials-btn', function(){
		let $this = $(this);

		$this.closest('.testemonials__item').find('.testemonials__item-files, .two').slideToggle();
	})

	var swiper = new Swiper( '.security-slider .swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 3,
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 150,
			modifier: 1.5,
			slideShadows : false,
		},
		navigation: {
	        nextEl: '.security-slider__nav .swiper-button-next',
	        prevEl: '.security-slider__nav .swiper-button-prev',
	    },
	    breakpoints: {
		    660: {
		    	effect: false,
		    	slidesPerView: 1,
		    }
		},
	} );


	let swiperServicesItem = new Swiper(".services__item-slider .swiper-container", {
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		a11y: false,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
		    // when window width is <= 640px
		    1600: {
		      // spaceBetween: 50,
		    },
		    1440: {
		      // spaceBetween: 25,
		    },
		    1200: {
		      // slidesPerView: 2,
		      // spaceBetween: 20,
		    },
		    660: {
		      // slidesPerView: 1,
		      // spaceBetween: 0,
		    }
		},

	});

	let swiperServicesSlider = new Swiper(".services-slider .swiper-container", {
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		a11y: false,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
		    // when window width is <= 640px
		    1600: {
		      // spaceBetween: 50,
		    },
		    1440: {
		      // spaceBetween: 25,
		    },
		    1200: {
		      // slidesPerView: 2,
		      // spaceBetween: 20,
		    },
		    660: {
		      // slidesPerView: 1,
		      // spaceBetween: 0,
		    }
		},
		navigation: {
	        nextEl: '.services-slider__nav .swiper-button-next',
	        prevEl: '.services-slider__nav .swiper-button-prev',
	    },
	});

	$('.faq__item-top').click(function() {
		let $this = $(this);

		$this.closest('.faq__item').toggleClass('js__open');
		$this.next('.faq__item-bot').slideToggle();
	})


	$('.h-menu__item').click(function(){
		let $this = $(this);
		$('.h-menu__item').removeClass('active');
		$this.addClass('active');
	})


	if($('body').hasClass('js__scroll')){
		$("body").on('click', '[href*="#"]', function(e){
			e.preventDefault();
			$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - $('.head.js__show').innerHeight() }, 1000);
		});

	} else {
		$("body").on('click', '[href*="#"]', function(e){
			e.preventDefault();
			$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
		});
	}




	if ($(".security-stat__num").length){
		$(".security-stat__num").countTo();
	}

	// setTimeout(function(){
		$('.banner-logo').addClass('js__animated')

	// }, 2300)



	$(window).on('scroll', function(){
		if ($(".security-stat__num").length)
			if ($(".security-stat__num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".security-stat__num:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.countTo({
							speed: speed,
						});

						$this.addClass("countered");
					});
			}
		
	})
	
	$(".fancybox").fancybox({
		animationEffect: false,
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
		keyboard: false,
		modal: false,
		beforeClose(instance, slide){

		}
	})

	


	let $testemonialsSlider = $(".testemonials-cont .testemonials__list").on('init', slick => {

		}).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			appendArrows: $('.testemonials-cont .testemonials-slider__arrow'),
			// fade: true,
			// arrows: false,
			// lazyLoad: 'progressive',
			autoplay: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: false,
						dots: true
					}
				},
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
					}
				}
			]
	});

	let $reviewsTestemonialsSlider = $(".reviews-cont .testemonials__list").on('init', slick => {

		}).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			appendArrows: $('.reviews-cont .testemonials-slider__arrow'),
			// fade: true,
			// arrows: false,
			// lazyLoad: 'progressive',
			autoplay: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: false,
						dots: true
					}
				},
				{
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
					}
				}
			]
	});

	$('.testemonials-nav__link input[type="radio"]').on('change', function(){
		let value = $(this).val();

		$testemonialsSlider.slick('slickUnfilter');
		$testemonialsSlider.slick('slickFilter', function(id, slide){
			let $slide = $(slide);
			return +$slide.find("[data-id]").data("id") == value;
			filtered = false;
		})

		
	})

	$('.reset-filter').click(function(){
		$('.slider-nav input').prop('checked', false);
		$testemonialsSlider.slick('slickUnfilter');
	})


	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})



	var menuClone = $('.h-menu').clone();
	var contactsClone = $('.head__contacts').clone();
	var socClone = $('footer .soc').clone();

	$('.mobile-menu').append(contactsClone);
	$('.mobile-menu').append(menuClone);
	$('.mobile-menu').append(socClone);


	if($(window).width() < 1200){
		$('.h-menu__link').click(function(e){
			e.preventDefault();

			$('body').removeClass('js__menu--open');
		})
	}



	

	if (!is.touchDevice()){
		window.selectizeOpen = false;

		$("select:not(.not-selectize)").selectize({
			onDropdownOpen(){
				window.selectizeOpen = true;

				if (window.fullpage)
					window.fullpage.setAllowScrolling(false)
			},
			onDropdownClose(){
				window.selectizeOpen = false;

				if (window.fullpage)
					window.fullpage.setAllowScrolling(true)
			}
		})
	}

	// if (is.desktop()){
	// 	$(".h-menu").menuAim({
	// 		submenuSelector: ".have-sub",
	// 		activate(menuItem){
	// 			if (window.matchMedia("screen and (min-width: 1300px)").matches)
	// 				menuItem.classList.add("js__opened")
	// 		},
	//    		deactivate(menuItem){
	//    			if (window.matchMedia("screen and (min-width: 1300px)").matches)
	//    				menuItem.classList.remove("js__opened")
	//    		},
	//    		submenuDirection: "below",
	//    		exitMenu(menu){
	//    			if (window.matchMedia("screen and (min-width: 1300px)").matches)
	//    				menu.querySelector(".have-sub.js__opened").classList.remove("js__opened")
	//    		}
	// 	})

	// 	$(".h-submenu ul").menuAim({
	// 		submenuSelector: ".have-sub-sub",
	// 		activate(menuItem){
	// 			if (window.matchMedia("screen and (min-width: 1300px)").matches)
	// 				menuItem.classList.add("js__opened")
	// 		},
	//    		deactivate(menuItem){
	//    			if (window.matchMedia("screen and (min-width: 1300px)").matches)
	//    				menuItem.classList.remove("js__opened")
	//    		},
	//    		submenuDirection: "right",
	//    		exitMenu(menu){
	//    			if (window.matchMedia("screen and (min-width: 1300px)").matches)
	//    				menu.querySelector(".have-sub-sub.js__opened").classList.remove("js__opened")
	//    		}
	// 	})
	// }

	// ;(function(){
	// 	let subLink = document.querySelectorAll(".have-sub .h-menu__link, .h-submenu__item .h-submenu__link");

	// 	if (!subLink.length)
	// 		return

	// 	for (var link of subLink)
	// 		link.addEventListener("click", function(e){
	// 			let parent = this.closest(".have-sub-sub") || this.closest(".have-sub");

	// 			if (parent.classList.contains("js__opened"))
	// 				parent.classList.remove("js__opened")
	// 			else
	// 				parent.classList.add("js__opened")

	// 			e.preventDefault()
	// 		})
	// })()

	// ;(function(){
	// 	let submenu = document.querySelectorAll(".submenu, .h-submenu");

	// 	if (!submenu.length)
	// 		return

	// 	for (var menu of submenu){
	// 		let close = document.createElement("button");

	// 		close.classList.add("close-menu")

	// 		close.innerText = "Назад"

	// 		close.addEventListener("click", function(e){
	// 			let parent = this.closest(".have-sub-sub") || this.closest(".have-sub");

	// 			if (parent.classList.contains("js__opened"))
	// 				parent.classList.remove("js__opened")
	// 			else
	// 				parent.classList.add("js__opened")
	// 		})
			
	// 		menu.appendChild(close)
	// 	}
	// })()


	// let burger = document.querySelector(".head__burger");

	// burger.addEventListener("click", function(){
	// 	let burger = this.querySelector(".burger"),
	// 		menu = document.querySelector(".head__menu");

	// 	if (burger.classList.contains("active")){
	// 		burger.classList.remove("active")

	// 		menu.classList.remove("js__opened")

	// 		window.mainMenuOpened = false;
	// 	}else{
	// 		burger.classList.add("active")

	// 		menu.classList.add("js__opened")

	// 		window.mainMenuOpened = true;
	// 	}
	// })

	$("body").on("click", e => {
		let $target = $(e.target),
			$burger = $(".head__burger"),
			$menu = $(".head__menu");

		if (window.matchMedia("screen and (max-width: 1300px)").matches)
			if (!$burger.has($target).length
				&& !$burger.is($target)
				&& !$menu.has($target).length
				&& !$menu.is($target))
			{
				document.querySelector(".burger").classList.remove("active")

				document.querySelector(".head__menu").classList.remove("js__opened")

				window.mainMenuOpened = false;
			}
	})
})

$(window).on("load scroll resize", e => {




	if ($(window).scrollTop() >= 800){
		$(".head").addClass("js__scrolled");
		$("body").addClass("js__scroll");
		setTimeout(e => {
			$(".head").addClass("js__show")
		}, 500);
	}else{
		$(".head").removeClass("js__scrolled").removeClass("js__show");
		$("body").removeClass("js__scroll");
	}

});




// $(window).on("load scroll touchmove", function(){
// 	if ($(window).scrollTop() > 800){
// 		$(".scroll-top").fadeIn(300);
// 	}else{
// 		$(".scroll-top").fadeOut(300);
// 	};

// 	if($(window).width() > 660) {



// 		if($(window).scrollTop()>400){
// 			$('.head').addClass('js__fixed');
// 		}else {
// 			$('.head').removeClass('js__fixed');
// 		}
// 	}


// });