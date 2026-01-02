
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        948: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        1236: {
          slidesPerView: 4,
          spaceBetween: 50,
          slidesPerGroup: 1,
        },
        1650: {
          slidesPerView: 5,
          spaceBetween: 40,
          slidesPerGroup: 1,
        }
      },
  });

  $(document).ready(function(){

    $("#dish1").mouseenter(function(){
      $("centered").css("opacity", "1");
    });
    

  });