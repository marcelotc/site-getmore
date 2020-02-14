function mudaFoto(foto) {
	document.getElementById("sectionThreeImage").src = foto;

	//$('.active').removeClass('active');
	$(this).addClass('active');
}


/*====================================================
                        TESTIMONIALS
====================================================*/
$(function () {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	})
});