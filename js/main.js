// if($('.category_option').length){
//   $('.category_option').owlCarousel({
//       nav: true,
//       margin: 5,
//       dot: false,
//       boolean: false,
//       loop: false,
//       navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
//       items: 3,
//   });
// }


$(document).ready(function() {
  if ($('.category_option').length) {
    var owl = $('.category_option').owlCarousel({
      nav: true,
      margin: 5,
      dots: false,
      loop: false,
      navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
      items: 3
    });
  }

  $('.staff_item .tick .button').click(function() {
    $(this).toggleClass('checked');
    $('footer').toggleClass('active');
  });

  function autoSlideToActiveCategory() {
    var activeCategoryIndex = $('.category_item.active').index();
    owl.trigger('to.owl.carousel', [activeCategoryIndex, 300, true]);
  }

  // Thêm đoạn mã sau vào cuối document.ready để tự động lướt slide khi có danh mục có class active
  if ($('.category_item.active').length) {
    autoSlideToActiveCategory();
  }

  $('.category_option .category_item').bind('click', function(e) {
    e.preventDefault();

    var target = $(this).attr("data-href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600, function() {
      location.hash = target;
    });

    $('.category_item').removeClass('active');
    $(this).addClass('active');

    autoSlideToActiveCategory();
  });

  var isScrolling = false;
  $(window).scroll(function() {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(function() {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance >= 350) {
          $('nav').fadeIn("fast");
        } else {
          $('nav').fadeOut("fast");
        }

        var prevActiveIndex = $('.category_item.active').index();
        var targetIndex = -1;

        $('.staff_option').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
            targetIndex = i;
          }
        });

        if (targetIndex !== prevActiveIndex) {
          $('.category_item.active').removeClass('active');
          $('.category_item').eq(targetIndex).addClass('active');
          autoSlideToActiveCategory();
        }

        isScrolling = false;
      });
    }
  }).scroll();
});
