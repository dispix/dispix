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
		event.preventDefault()
		$($(this).attr('href'))[0].scrollIntoView()
		scrollBy(0, -offset)
	})

	// Navbar shadow after main div
	$(document).scroll(function()
	{
		var y = $(this).scrollTop()
		var height = $(window).height() - 51

		if (y > height)
		{
			$('#navbar').css('box-shadow', '0 0 10px rgba(51, 51, 51, 1)')
		}
		else
		{
			$('#navbar').css('box-shadow', 'none')
		}
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