"use strict";

$(document).ready(function()
{
	// Offset initialization and updating
	var offset = setOffset()

	$(window).resize(function ()
	{
		offset = setOffset()
	})

	function setOffset ()
	{
		if ($('#navbar').is(':visible'))
		{
			return 50
		}
		else
		{
			return 0
		}
	}

	// Wow scroll animations
	var wow = new WOW(
		{
			boxClass:		'wow',		// default
			animateClass:	'animated',	// default
			offset:			200,
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

	// Scroll back when opening a skill panel
	$('.skills .panel-heading').click(function()
	{
		$('html, body').animate({scrollTop: $('.skills .section-title').offset().top - offset}, 500)
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