$(function () {
  // Scroll to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });

  $("#return-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 100);
  });

  // Sticky Header
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $("header").addClass("effect");
    } else {
      $("header").removeClass("effect");
    }
  });

  //Aside
  $(".hamburger").click(function () {
    $(".sidenav__overlay").addClass("overlay--width");
    $(".sidenav").addClass("sidenav--width");
    $(".sidenav").removeClass("invisible");
    $(".sidenav__menu").removeClass("invisible");
  });

  $(".sidenav__overlay, .sidenav__close a").click(function () {
    $(".sidenav__overlay").removeClass("overlay--width");
    $(".sidenav").removeClass("sidenav--width");
    $(".sidenav").addClass("invisible");
    $(".sidenav__menu").addClass("invisible");
  });

  // Products Slider
  $(".products-slide").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Projects Slider
  function toggleSlick() {
    const $slider = $(".projects-wrap");
    const breakpoint = 1199;

    if ($(window).width() < breakpoint) {
      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    } else {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    }
  }

  toggleSlick();

  $(window).on("resize", function () {
    toggleSlick();
  });
});
