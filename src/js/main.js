$(document).ready(function(){
	tagline = $('.tagline')
	tagline.css('background-image', 'url(' + tagline.data('bg') + ')');
	tagline.css('background-position', tagline.data('position'));


	head = $('header');
    return $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return head.addClass('fill');
      } else {
        return head.removeClass('fill');
      }
    });
})