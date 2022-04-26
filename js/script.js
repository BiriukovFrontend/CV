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