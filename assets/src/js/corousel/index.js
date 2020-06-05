( function ( $ ) {
	$( document ).ready( function () {
		$( '.your-class' ).slick({
			dots: true,
			autoplay: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	} );
} )( jQuery );
