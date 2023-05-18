if($('.category_option').length){
    $('.category_option').owlCarousel({
        nav: true,
        margin: 5,
        dot: false,
        boolean: false,
        loop: false,
        navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
        items: 3,
    });
}
$('.staff_item .tick .button').click(function() {
    $(this).toggleClass('checked');
    $('footer').toggleClass('active');
});






$(document).ready(function() {
    $('.category_option .category_item').bind('click', function(e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của click
  
      var target = $(this).attr("data-href"); // Lấy đích cuộn từ thuộc tính data-href của danh mục
  
      // Thực hiện cuộn mượt bằng cách lấy vị trí top của phần tử đích và đặt nó làm mục tiêu cuộn
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top
      }, 600, function() {
        location.hash = target; // Gắn kết hash (#jumptarget) vào địa chỉ trang
      });
  
      // Gỡ bỏ lớp active khỏi tất cả các mục danh mục
      $('.category_item').removeClass('active');
      // Gán lớp active cho mục danh mục được click
      $(this).addClass('active');
    });
  });

// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     if (scrollDistance >= 850) {
//     		$('nav').fadeIn("fast");
//     } else {
//     		$('nav').fadeOut("fast");
//     }

//     // Assign active class to nav links while scolling
//     $('.staff_option').each(function(i) {
//             if ($(this).position().top <= scrollDistance) {
//                     $('.category_item.active').removeClass('active');
//                     $('.category_item').eq(i).addClass('active');
//             }
//     });
// }).scroll();


    // $('.category_option .category_item[data-href*=#]').bind('click', function(e) {
    //     alert('hihi');
    //   e.preventDefault(); // Ngăn chặn hành vi mặc định của click
  
    //   var target = $(this).attr("data-href"); // Lấy đích cuộn từ thuộc tính data-href của danh mục
  
    //   // Thực hiện cuộn mượt bằng cách lấy vị trí top của phần tử đích và đặt nó làm mục tiêu cuộn
    //   $('html, body').stop().animate({
    //     scrollTop: $(target).offset().top
    //   }, 600, function() {
    //     location.hash = target; // Gắn kết hash (#jumptarget) vào địa chỉ trang
    //   });
    // });


    var isScrolling = false;
$(window).scroll(function() {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(function() {
      var scrollDistance = $(window).scrollTop();

      if (scrollDistance >= 850) {
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
      }

      isScrolling = false;
    });
  }
}).scroll();
