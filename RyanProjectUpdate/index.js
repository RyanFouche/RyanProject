$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#jumbotron');
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();

            if (scroll_start > offset.top) {
                $('.navbar-custom').css('background-color', 'rgba(0,0,0,0.7)');
                $('.navbar-custom .navbar-nav > li > a ').css('color', '#fff');
                $('.navbar-header .navbar-brand').css('color', '#fff');
            } else {
                $('.navbar-custom').css('background-color', 'rgba(0,0,0,0.0)');
                $('.navbar-custom .navbar-nav > li > a ').css('color', '#000');
                $('.navbar-header .navbar-brand').css('color', '#000');
            }
        })

    }
})