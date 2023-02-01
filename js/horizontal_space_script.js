$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 50)
		{
			$('.header-area').addClass('is-hidden');
		}
		else
		{
			$('.header-area').removeClass('is-hidden');
		}
	});
	$(".menu-icon").click(function(){
		$(this).toggleClass('active');
		$(".nav_menu_right_part a").toggleClass('hide_menu');
		$('.menu-items').toggleClass('active');
		$(".panel-left").toggleClass('panel-left-show');
	});
	$(".panel-left").click(function() {
		$(this).removeClass('panel-left-show');
		$(".menu-items").removeClass('active');
		$(".menu-icon").removeClass('active');
	});
	$(".menu-navigation ul li").each(function(index){
		 $(this).css({
			'-webkit-animation-delay': .1*(1+index) + 's',
			'-o-animation-delay': .1*(1+index) + 's',
			'animation-delay': .1*(1+index) + 's',
		 });
	 });
});