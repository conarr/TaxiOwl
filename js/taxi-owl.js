(function($) {
  "use strict";


//  S M O O T H  S C R O L L I N G
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


//  C L O S E  R E S P O N S I V E  M E N U  W H E N  A  L I N K  I S  C L I C K E D
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


//  A C T I V A T E  S C R O L L S P Y
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


//  C O L L A P S E  N A V B A R
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };


//  C O L L A P S E  N A V B A R  I S  P A G E  N O T  A T  T O P
  navbarCollapse();


//  C O L L A P S E  N A V B A R  W H E N  P A G E  I S  S C R O L L E D
  $(window).scroll(navbarCollapse);

})(jQuery);