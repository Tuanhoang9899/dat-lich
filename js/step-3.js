// if($('.category_option').length){
//     $('.category_option').owlCarousel({
//         nav: true,
//         margin: 16,
//         dot: false,
//         loop: false,
//         navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
//         items: 5,
//     });
// }
$(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
        $('.title h2').addClass("active");
    } else {
        $('.title h2').removeClass("active");
    }
});



$(function () {
  var currentDate = new Date(); // Lấy ngày hiện tại
  var currentYear = currentDate.getFullYear(); // Lấy năm hiện tại
  var currentMonth = currentDate.getMonth(); // Lấy tháng hiện tại (giá trị từ 0 đến 11)

  var calendarContainer = $("#calendar"); // Lấy phần tử div có id "calendar"

  // Tạo một mảng chứa các phần tử ngày
  var daysArray = [];

  // Tạo các phần tử ngày và tháng từ tháng hiện tại trở đi
  for (var year = currentYear; year <= currentYear + 1; year++) {
    for (var month = (year === currentYear ? currentMonth : 0); month < 12; month++) {
      var firstDay = new Date(year, month, 1);
      var startingDay = firstDay.getDay(); // Lấy ngày trong tuần của ngày đầu tiên (0-6, 0 là Chủ Nhật)
      var totalDays = new Date(year, month + 1, 0).getDate(); // Tổng số ngày trong tháng

      var monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month, 1)); // Lấy tên tháng
      var monthTitle = $("<h2>").addClass("month-title").text(monthName + " " + year); // Tạo phần tử tiêu đề cho tháng
      calendarContainer.append(monthTitle);

      // Tạo các phần tử ngày và thứ trong tháng, chỉ hiển thị từ ngày hiện tại trở đi
      for (var day = (year === currentYear && month === currentMonth ? currentDate.getDate() : 1); day <= totalDays; day++) {
        var date = new Date(year, month, day);
        var dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }); // Lấy thứ trong tuần
        var dayOfWeekElement = $("<div>").addClass("calendar-day-of-week").text(dayOfWeek);
        var dayElement = $("<div>").addClass("calendar-day").text(day);

        if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
          // Đánh dấu ngày hiện tại
          dayElement.addClass("current-day");
          dayOfWeekElement.addClass("current-day");
        }

        var dayContainer = $("<div>").addClass("day-container");
        dayContainer.append(dayElement);
        dayContainer.append(dayOfWeekElement);
        calendarContainer.append(dayContainer);
      }
    }
  }

  // Hiển thị danh sách ngày bằng Owl Carousel
  calendarContainer.owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 5
      },
      1000: {
        items: 5
      }
    },
    onInitialized: function () {
      // Làm mới Owl Carousel
      calendarContainer.trigger('refresh.owl.carousel');
    }
  });
});






