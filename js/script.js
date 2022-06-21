$('.skills__inner').slick({
  dots: true,
  infinite: true,
  speed: 300,
  swipe:true,
  slidesToShow: 4,
  slidesToScroll: 2,

  prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrowL.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrowR.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  
  ]
});
$('.porfolio__inner').slick({
  infinite: true,
  speed: 300,
  swipe:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centreMode: true,
  variableWidth: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrowL.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrowR.svg" alt=""></img>',
  
});
$('.certification__inner').slick({
  infinite: true,
  speed: 300,
  swipe:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centreMode: true,
  variableWidth: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="./img/arrowL.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="./img/arrowR.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      }
    }
    ]
});

var headerHeight = $("section .title").height();

// Attach the click event
$('a[href*=#]').bind("click", function(e) {
    
    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - headerHeight;
    
    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
        window.location.hash = target;
    });
    
    e.preventDefault();
});

/* $(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            var scrollToPosition = $(target).offset().top - headerHeight;
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                let targetOffset = $target.offset().top - ($("header").outerHeight() - 290); 
                $('html,body').animate({scrollTop: targetOffset}, 600);
                return false;
            }
        }
    });
}); */
var btn = $('.arrow-top');
 var menuShow = $('.header__top');
 let headerNav = $('.header__nav');
 let navMenu = $('.nav__menu');
 let navMenuClose = $('.nav__menuClose');
 let linkburger= $('.header__nav-li a');
 let navBurger = $('.nav__burger');


/*  navBurger.click(function){

}); */
navBurger.click(function(){
  headerNav.addClass('active');
  navMenuClose.css('display','block');
  linkburger.click(function(){
    headerNav.removeClass('active');
    navMenuClose.css('display', 'none');
    $('html').css('overflow', 'auto');
  });
  navMenuClose.click(function(){
    headerNav.removeClass('active');
    navMenuClose.css('display','none');
  });
});
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
}

 if ($(this).scrollTop() > 100) {
   menuShow.addClass('menuFixed'); 

navMenu.click(function(){
headerNav.addClass('active');
$('html').css('overflow', 'hidden');
navMenuClose.css('display', 'block');
menuShow.css('height', 'auto');

linkburger.click(function(){
  headerNav.removeClass('active');
  navMenuClose.css('display', 'none');
  $('html').css('overflow', 'auto');
});

navMenuClose.click(function(){
  navMenuClose.css('display', 'none');
  headerNav.removeClass('active');
  $('html').css('overflow', 'auto');
});
  });
  } 
/*   if ($(this).width() >= 1000){
    navMenu.css('display', 'none');
  } */
else {
btn.removeClass('show');
 menuShow.removeClass('menuFixed');


}

});

btn.on('click', function() {
$('html, body').animate({scrollTop: 0 }, 1000);
});


$(window).resize(function () {
  $('.skills__inner').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
  $('.skills__inner').not('.slick-initialized').slick('resize');
});



/* $(window).resize(function() {
  if ( $(window).width() < 480 ) {

    $('.header__top').on('click', function() {
      $('.header__nav').css('display','block' ,'position','fixed' ,'top','0px');

   

    });

  }

}); */
