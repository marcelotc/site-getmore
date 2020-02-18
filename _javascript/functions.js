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
              			 ACORDEON         
====================================================*/
function mudaFoto(foto) {
	document.getElementById("sectionThreeImage").src = foto;

	//$('.active').removeClass('active');
	$(this).addClass('active');
}

$('.menu').on('click', function() {
	$(".active").removeClass("active")
	$('.menu-content').hide();
	$(this).find('.menu-content').show();
	$(this).addClass('active').find('.circle').addClass('active');
  });



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
});


/*====================================================
                        PARTNERS
====================================================*/
$(function () {

	$('#partners-carousel-mobile-1').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 20,
		stagePadding: 100,
		dots: false,
		responsive: {
			0: {
				items: 2
			}
		}
	})

	$('#partners-carousel-mobile-2').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 20,
		stagePadding: 100,
		dots: false,
		responsive: {
			0: {
				items: 2
			}
		}
	})

	$('#partners-carousel-mobile-3').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		margin: 20,
		stagePadding: 100,
		dots: true,
		responsive: {
			0: {
				items: 2
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