$(document).ready( function () {

	let $button=$('#nav-toggle'),
	$nav = $('#navigation'),
	navToggleClassName = 'navigation-holder--mobile-open',
  textOpen = 'Open nav',
  textClose ='Close nav',


	$button.on('click', function(e) {
		e.preventDefault();

		if ( $nav.hasClass(navToggleClassName) ) {

			$nav.fadeOut();
			setTimeOut(function(){
				$nav.removeClass(navToggleClassName);
			} , 1000)
			$(this).text(textOpen);
		} else {
			$nav.hide();
			$nav.addClass(navToggleClassName);
			$nav.fadeIn();
			$(this).text(textClose);
		}    
	});


});