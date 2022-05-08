$('.skills__inner').slick({
  dots: true,
  infinite: true,
  speed: 300,
  swipe:true,
  slidesToShow: 4,
  slidesToScroll: 4,

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
        slidesToScroll: 1
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
  
});

let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.5 // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    let w = window.pageYOffset, // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      let progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash // URL с хэшем
      }
    }
  }, false);
}
var btn = $('.arrow-top');
var menuShow = $('.header__top');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
}
  if ($(this).scrollTop() > 10) {
           
   menuShow.addClass('menuShow');

} 
else {
  btn.removeClass('show');
  menuShow.removeClass('menuShow');
}
});

btn.on('click', function() {
$('html, body').animate({scrollTop: 0 }, 1000);
});
