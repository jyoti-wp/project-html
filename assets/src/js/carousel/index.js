( function ( $ ) {

	$( document ).ready( function () {

		// Slider bottom.
		$( '.image-container' ).slick( {
			dots: true,
			autoplay: false,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			slidesToScroll: 1
		} );

		// Banner slider.
		$( '.banner-slider-wrap' ).slick( {
			dots: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			autoplay: true,
			arrows: true
		} );

		// latest news slider

		$( '.latest-update-image-area' ).slick( {
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			autoplay: true,
		} );
	} );

}( jQuery ) );
