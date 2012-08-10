/**
 * author: Alexander Vavilov (asvavilov)
 * www: yasla.net
 * 
 * blocks auto height
 * jquery plugin
 *
 * TODO timer
 * 
 * Changelog:
 * * 1.0 (20120810)
 * * * First version
 */

(function($){  
	$.fn.relheight = function(options){  
		var defaults = {
		};
		var options = $.extend(defaults, options);
		var group = this;
		var resize = function(){
			group.css('min-height', '');
			var hs = group.map(function(){
				return $(this).height();
			});
			var max_h = Math.max.apply(null, hs);
			group.css('min-height', max_h);
		};
		$(window).on('load', resize);
		$(window).on('resize', resize);
	};
})(jQuery);
