$(document).ready(function(){
	var offset = 50// Navbar height
	$('body').scrollspy(
		{
			target: '#navbar',
			offset: offset
		}
	)

	// Navbar clicks offset
	$('#navbar li a').click(function(event)
	{
		if ($(this).attr('href') == '#home')
		{
			event.preventDefault()
			$(document).scrollTop(0)
		}
		else
		{
			event.preventDefault()
			$($(this).attr('href'))[0].scrollIntoView()
			scrollBy(0, -offset)
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
		var height = $(window).height() - 51

		if (y > height)
		{
			$('#navbar').css('box-shadow', 'inset 0 -3px 5px -1px rgba(51, 51, 51, .6)')
		}
		else
		{
			$('#navbar').css('box-shadow', 'none')
		}

		// var pos = $('#projects').offset()['top'] - $('#skills').height()
		// if (pos < (y - 51) )
		// {
		// 	$('#skills').css('position', 'fixed')
		// 	$('#skills').css('top', $('#home').height())
		// }
		// else
		// {
		// 	$('#skills').css('position', 'initial')
		// }
	})


	// Scroll fire events
	// $(document).scroll(function() {
	// 	$('.single-skill').css('opacity', '0')
	// 	var y = $(this).scrollTop()
	// 	var height = $( window ).height()
	//
	// 	if (y > (height + 400))
	// 	{
	// 		$('.single-skill').fadeIn()
	// 	}
	// 	else
	// 	{
	// 		$('.single-skill').fadeOut()
	// 	}
	// })
})