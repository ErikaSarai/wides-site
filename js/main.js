(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(3000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


 // // // GREEN 
 $(window).stellar({
  responsive: true,
  parallaxBackgrounds: true,
  parallaxElements: true,
  horizontalScrolling: false,
  hideDistantElements: false,
  scrollProperty: 'scroll'
});


var fullHeight = function() {

  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function(){
    $('.js-fullheight').css('height', $(window).height());
  });

};
fullHeight();


var onePageClick = function() {

  $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
    event.preventDefault();

    var href = $.attr(this, 'href');

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500, function() {
      // window.location.hash = href;
    });
  });

};
onePageClick();

 // Burger Menu
 var burgerMenu = function() {

  $('body').on('click', '.js-fh5co-nav-toggle', function(event){
    event.preventDefault();
    if ( $('#ftco-nav').is(':visible') ) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');	
    }
  });

};
burgerMenu();

var carousel = function() {
  $('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:11000,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:false,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  })
};
carousel();

// scroll
var scrollWindow = function() {
  $(window).scroll(function(){
    var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');	
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake');	
      }
      
      if(sd.length > 0) {
        sd.addClass('sleep');
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
      if(sd.length > 0) {
        sd.removeClass('sleep');
      }
    }
  });
};
scrollWindow();

})(jQuery);


//back to top//
function subircarro(){
  $('html,body').animate({
          scrollTop: 0
      }, 800);
      $('#nave').addClass("car-run");
      setTimeout(function () {
          $('#nave').removeClass('car-run');
      }, 1000);
      return false;
  }

  $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
          $('#nave').addClass("show");
          $('#nave').addClass("car-down");
      } else {
          $('#nave').removeClass("show");
          setTimeout(function () {
              $('#nave').removeClass('car-down');
          }, 300);
      }
  });

  $('.nav-item').click(function(){
    $('#ftco-nav').removeClass("show");
  });

//menu//
