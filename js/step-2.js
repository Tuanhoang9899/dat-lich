if($('.category_option').length){
    $('.category_option').owlCarousel({
        nav: true,
        margin: 16,
        dot: false,
        loop: false,
        navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
        items: 5,
    });
}
$(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
        $('.title h2').addClass("active");
    } else {
        $('.title h2').removeClass("active");
    }
});