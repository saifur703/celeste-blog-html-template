(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.popular-post-carousel').owlCarousel({
      items: 1,
      loop: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: false,
    });

    /*==============================
        Slick Nav
    ================================*/
    var $primaryMenu = $('.primary-menu');
    $primaryMenu.slicknav();
  });

  jQuery(window).on('load', function () {});
})(jQuery);
