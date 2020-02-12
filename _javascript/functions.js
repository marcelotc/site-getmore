function mudaFoto(foto) {
	document.getElementById("sectionThreeImage").src = foto;

	$('.active').removeClass('active');
	$(this).addClass('active');
}

$(function () {
	$('.teste').click(function () {
		alert('teste')
	});
});