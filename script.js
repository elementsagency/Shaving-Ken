// header

$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header__link").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').removeClass('lock');
    }
    }); 
    $(".header__logo").click(function(){
        if ($(window).width() < 992){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });
    $(".header__burger, .header__link, .header__logo").click(function(){
        $('.header__menu').show(); 
    });
}); 


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// header

// header show

$(document).ready(function() {
  $(".header__logo").addClass("show");
  $(".header__list li").each(function(index) {
      var $item = $(this);
      setTimeout(function() {
          $item.addClass("show");
      }, index * 200);
  });
});

// header show