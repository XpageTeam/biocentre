import $ from "jquery"

$(e => {
	$(".tabs-tab").click(function(){
		let $this = $(this);

		
		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs");
		

		if (!$this.hasClass("active")){
			$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");
			$this.addClass("active");
			$parent.find(`.tabs-content[data-id='${id}']`).addClass("active");
			if($(window).width() > 667){
				$('html, body').animate({ scrollTop: $(`.tabs-content[data-id='${id}']`).offset().top - $('.head.js__show').innerHeight() - 20}, 500)
			}
		}else{
			$parent.find(".tabs-tab.active, .tabs-content.active").removeClass("active");
		}

	});

	$(".services__content-title").click(function(){
		let $this = $(this);

		if (window.matchMedia("(max-width: 1000px)").matches){
			$this.toggleClass('js__active');
			$this.nextAll('.services__content-wr').slideToggle();
		}
	})
})