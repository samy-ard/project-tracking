(function($) {
	$(document).ready(function() {
		$('.btn-menu').on('click', function(e) {
			e.preventDefault();
			$('.navbar').toggle();
			$(this).find('.icon').toggleClass('icon-menu icon-close');
		});
	});
})(jQuery);