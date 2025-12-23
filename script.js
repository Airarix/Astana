$('.carousel').slick({
  centerMode: true,
  centerPadding: '35px',
  prevArrow: '<img src="images/Arrow_left.svg" class="arrow_slider">',
  nextArrow: '<img src="images/Arrow_right.svg" class="arrow_slider">',
  autoplay: true,
  slidesToShow: 3,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '35px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '35px',
        slidesToShow: 1
      }
    }
  ]
});