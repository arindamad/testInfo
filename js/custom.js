/*===============banner===============*/
var swiper = new Swiper('.banner-sec .swiper', {
	slidesPerView: 1,
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});
/*===============brand marquee===============*/
$('.marquee-with-options').marquee({
    speed: 15000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
});
/*===============product===============*/
var swiper = new Swiper('.product-wrap .swiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.product-wrap .swiper-button-next',
		prevEl: '.product-wrap .swiper-button-prev',
	},
	breakpoints: {
	  320: {
		slidesPerView: 1,
		spaceBetween: 0,
	  },
	  992: {
		slidesPerView:2,
		spaceBetween: 20,
	  },
	  1200: {
		slidesPerView:3,
		spaceBetween: 30,
	  },
	},
});
/*===============diensten-dtl-product===============*/
var swiper = new Swiper('.diensten-dtl-product-slider .swiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
	  320: {
		slidesPerView: 1,
		spaceBetween: 0,
	  },
	  768: {
		slidesPerView:2,
		spaceBetween: 20,
	  },
	  992: {
		slidesPerView:3,
		spaceBetween: 22,
	  },
	},
});
/*===============aanbod-dtl-top-slider===============*/
var swiper = new Swiper('.dtl-top-slider .swiper', {
	slidesPerView: 1,
	spaceBetween:0,
	loop: true,
	centeredSlides: true,
	navigation: {
      nextEl: ".dtl-top-slider .swiper-button-next",
      prevEl: ".dtl-top-slider .swiper-button-prev",
    },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 1.5,
			spaceBetween: 18,
		},
		992: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
	},
});
/*===============aanbod-dtl-top-slider===============*/
var swiper = new Swiper('.dtl-feature-sec .swiper', {
	slidesPerView: 1,
	spaceBetween:0,
	loop: true,
	/*autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},*/
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
	},
});
/*===============customizing-dtl-slider===============*/
var swiper = new Swiper('.customizing-dtl-slider .swiper', {
	slidesPerView: 1,
	spaceBetween:0,
	loop: true,
	navigation: {
      nextEl: ".customizing-dtl-slider .swiper-button-next",
      prevEl: ".customizing-dtl-slider .swiper-button-prev",
    },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 0,
		},
	},
});
/*==========counter============*/
$('.count').each(function () {
	$(this).prop('Counter', 0).animate({
	  Counter: $(this).text()
	}, {
	  duration: 4000,
	  easing: 'swing',
	  step: function (now) {
	  $(this).text(Math.ceil(now));
	  }
	});
});
/*===============customizing-dtl-slider===============*/
var swiper = new Swiper('.overons-team-slider .swiper', {
	slidesPerView: 1,
	spaceBetween:0,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	// navigation: {
    //   nextEl: ".customizing-dtl-slider .swiper-button-next",
    //   prevEl: ".customizing-dtl-slider .swiper-button-prev",
    // },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 14,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 14,
		},
	},
});
/*===============overons-gallery-sec-slider===============*/
var swiper = new Swiper('.overons-gallery-sec .swiper', {
	slidesPerView: 1,
	spaceBetween:0,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	// navigation: {
    //   nextEl: ".customizing-dtl-slider .swiper-button-next",
    //   prevEl: ".customizing-dtl-slider .swiper-button-prev",
    // },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
	},
});

$(".mod-plus span").hover(function(){
	$(this).siblings(".mod-content").addClass("active");
	$(this).closest(".mod-plus").siblings().find(".mod-content").removeClass("active");
});