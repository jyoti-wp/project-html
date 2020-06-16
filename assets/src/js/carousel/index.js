( function ( $ ) {
	console.warn( 'came' );
	$( document ).ready( function () {
		$( '.image-container' ).slick({
			dots: true,
			autoplay: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	} );
} )( jQuery );
