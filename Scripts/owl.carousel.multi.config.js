jQuery("#carousel").owlCarousel({
  autoplay: true,
//  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4200,
  smartSpeed: 6000,
  nav: true,
  responsive: {
    0: {
      items: 3
    },

    600: {
      items: 3
    },

    1024: {
      items: 6
    },

    1366: {
      items: 6
    }
  }
});
