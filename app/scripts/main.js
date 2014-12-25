'use strict';
(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    var $window = $(window),
        $scrollDownBtn = $('#scroll-down'),
        $currentSlide = $scrollDownBtn.closest('.slide'),
        nextSlide = $currentSlide.next();

    // console.log($nextSlideOffsetTop);

    $scrollDownBtn.on('click', function(){
      var nextSlideOffset = nextSlide.offset(),
          nextSlideOffsetTop = nextSlideOffset.top;

      // $window.scrollTop(nextSlideOffsetTop);

      $('html, body').animate({
          scrollTop: nextSlideOffsetTop
        }, 500);

    });

  });
})(jQuery);
