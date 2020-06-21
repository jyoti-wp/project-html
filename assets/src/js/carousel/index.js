( function ( $ ) {

	$( document ).ready( function () {

		// Slider bottom.
		$( '.image-container' ).slick({
			dots: true,
			autoplay: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			slidesToScroll: 1,
		});

		// Banner slider.
		$('.banner-slider-wrap').slick({
			dots: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			autoplay: true,
			arrows: true
		});
	} );

} )( jQuery );
