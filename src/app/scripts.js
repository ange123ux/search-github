
  $(window).scroll(function() {
    if($(this).scrollTop() > 60)
    {
        $('.nav.opaque-navbar').addClass('.opaque');
    } else {
        $('.nav.opaque-navbar').removeClass('.opaque');
    }
});