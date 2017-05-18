$(document).ready(function(){
	tagline = $('.tagline')
	tagline.css('background-image', 'url(' + tagline.data('bg') + ')');
	tagline.css('background-position', tagline.data('position'));
})