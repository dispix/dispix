"use strict";

$(document).ready(function()
{
	var offset = 50// Navbar height

	// Wow scroll animations
	var wow = new WOW(
		{
			boxClass:		'wow',		// default
			animateClass:	'animated',	// default
			offset:			50,
			mobile:			true,		// default
			live: 			false
		}
	)
	wow.init()

	// Scrollspy
	$('body').scrollspy({target: '#navbar', offset: offset})

	// Navbar clicks offset
	$('#navbar li a').click(function(event)
	{
		event.preventDefault()
		
		if ($(this).attr('href') == '#home')
		{
			$('html, body').animate({scrollTop: 0}, 500)
		}
		else
		{
			var target = $(this.hash)
			$('html, body').animate({scrollTop: target.offset().top - offset}, 500)
		}
	})

	// Add active class on panel
	$('collapsed').click(function(){
		$('.skill panel').removeClass('active')
		$(this).addClass('active')
	})

	// Navbar shadow after main div
	$(document).scroll(function()
	{
		var y = $(this).scrollTop()
		var height = $(window).height() - (offset + 1)

		if (y > height)
		{
			$('#navbar').css('box-shadow', 'inset 0 -3px 5px -1px rgba(51, 51, 51, .6)')
			$('#navbar').css('z-index', '')
		}
		else
		{
			$('#navbar').css('box-shadow', 'none')
			$('#navbar').css('z-index', '1')
		}
	})
})