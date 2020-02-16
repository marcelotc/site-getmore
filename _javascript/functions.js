/*====================================================
                        MENU MOBILE
====================================================*/
function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

/*====================================================
                        
====================================================*/
function mudaFoto(foto) {
	document.getElementById("sectionThreeImage").src = foto;

	//$('.active').removeClass('active');
	$(this).addClass('active');
}


/*====================================================
                        TESTIMONIALS
====================================================*/
$(function () {

	$('#testimonials-cards-container').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 0,
		responsive: {
			0: {
				items: 2,
				stagePadding: 130,
			},
			425: {
				items: 1,
			},
			1024: {
				items: 2
			},
			1025: {
				items: 3
			}
		}
	})

	if(window.innerWidth > 1023){
		$('#partners-carousel').removeClass('owl-carousel');
		$('#partners-carousel').removeClass('owl-theme');
		$('div#partners-carousel').removeAttr('id');
	}
});


/*====================================================
                        PARTNERS
====================================================*/
$(function () {

	$('#partners-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 0,
		responsive: {
			0: {
				items: 3
			},
			1024: {
				items: 5
			},
			1025: {
				items: 5
			}
		}
	})
});

/*====================================================
                        STATS
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});