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
		var height = $(window).height() - offset - 1

		if (y > height)
		{
			$('#navbar').css('box-shadow', 'inset 0 -3px 5px -1px rgba(51, 51, 51, .6)')
		}
		else
		{
			$('#navbar').css('box-shadow', 'none')
		}

		// if (y >= ($('#projects').offset()['top'] - $(window).height()))
		// {
		//
		// 	$('#skills').addClass('locked')
		// 	$('#skills').css('top', (offset - ($('#skills').height() - $(window).height())))
		// 	$('#projects').css('margin-top', $('#home').height() + $('#skills').height())
		// }
		// else
		// {
		// 	console.log(offset - ($('#skills').height() - $(window).height()));
		// 	$('#skills').removeClass('blocked')
		// 	$('#skills').css('top', '')
		// 	$('#projects').css('margin-top', '')
		// }
	})
})