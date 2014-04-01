$(document).ready(function() {
	$("#smallnav").click(function() {			/* Mobile nav toggle */
		$("nav").slideToggle();
	});

	$.fn.lightbox = function() {		/* Lightbox */

	$(this).click(function(e) {
		// prevent default functionality of opening new page
		e.preventDefault();

		var image_href = $(this).attr("href");
		var text = $(this).attr("data-title");

		var lightbox = 								/* Create Elements in lightbox window */
			'<div id="lightboxwindow">' +
				'<div id="lightboxcontent">' +
					'<img src="' + image_href + '" class="active">' +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';

		$(lightbox).hide().appendTo("body").fadeIn(400);

		//on click close lightbox
		var lighbg = $("#lightboxwindow");
		lighbg.click(function() {
			$(this).fadeOut(400, function() {
				$(this).remove();
			});
		});

		// Close lightbox with ESC key
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				lighbg.fadeOut(400, function() {
				$(this).remove();
				});
			}
		});
	});
}

		/* Automatically resize Youtube videos with fluid parent element */

	$(function() {

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $("#vidwrapper");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});

	$(".slide").lightbox();  // Activate lightbox 
});

