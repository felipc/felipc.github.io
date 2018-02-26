(function($){$.fn.fixFloat=function(options){var defaults={enabled:true};var options=$.extend(defaults,options);var offsetTop;var s;var fixMe=true;var repositionMe=true;var tbh=$(this);var originalOffset=tbh.css('top');tbh.css({'position':'absolute'});if(options.enabled){$(window).scroll(function(){var offsetTop=tbh.offset().top;var s=parseInt($(window).scrollTop(),10);var fixMe=true;if(s>offsetTop){fixMe=true;}else{fixMe=false;}
if(offsetTop>100){tbh.addClass('menuAtivo');}else{tbh.removeClass('menuAtivo');}
if(s<parseInt(originalOffset,10)){repositionMe=true;}else{repositionMe=false;}
if(fixMe){var cssObj={'position':'fixed','top':'0px'}
tbh.css(cssObj);}
if(repositionMe){var cssObj={'position':'absolute','top':originalOffset}
tbh.css(cssObj);}});}};})(jQuery);