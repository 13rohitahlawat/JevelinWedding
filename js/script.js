$(document).ready(function () {
  $(".icon-burger").click(function () {
    $(".resp-nav").toggleClass("active");
  });

  $(window).scroll(function () {
    if (this.pageYOffset > 100) {
      $(".nav-bar").css({
        backgroundColor: "#fff",
        borderBottom: "none",
        boxShadow: "0 1px 20px 0 rgba(0,0,0,0.3)",
        transition: "all 0.3s ease-in-out",
      });
      $(".nav-logo").html(
        `<img src="img/logo/jevelin_weddings_light.png" alt="" />`
      );
      $(".upNav-link").css({
        color: "#3a3a3a",
      });
    } else {
      $(".nav-bar").css({
        backgroundColor: "",
        borderBottom: "1px solid #848484",
        boxShadow: "",
      });
      $(".nav-logo").html(
        `<img src="img/logo/jevelin_weddings_dark.png" alt="" />`
      );
      $(".upNav-link").css({
        color: "#d9d9d9",
      });
    }
  });
  /*******venila JS for slider***** */

  const slides = document.querySelectorAll(".slider");
  const numberOfSlides = slides.length;
  let slideNumber = 0;
  let playSlider;
  const repeater = () => {
    playSlider = setInterval(function () {
      slides.forEach((slide) => {
        slide.classList.remove("s-active");
      });

      slideNumber++;

      if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
      }
      slides[slideNumber].classList.add("s-active");
    }, 4000);
  };
  repeater();
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

})