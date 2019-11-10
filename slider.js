jQuery('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
  breakpoint: 580,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 2
  }
  },
  ]
  });
