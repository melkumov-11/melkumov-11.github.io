$(function() {
  $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  
  $('.header-menu__hamburger').click(function(e) {
    e.preventDefault;
    this.toggleClass('header-menu__hamburger_active');
  });
});