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
				items: 2
			},
			1024: {
				items: 2
			},
			1025: {
				items: 3
			}
		}
	})
});