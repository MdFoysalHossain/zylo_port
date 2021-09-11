$(function(){
//   $().();
// $(".navbar-toggler").on("click", function () {
//   $(".burger").toggleClass("burger_active");
// });

// NAVBAR TOGGLE BUTTON START
$(".navbar-toggler").on("click", function () {
    $(".bar1").toggleClass("bar1_active");
    $(".bar2").toggleClass("bar2_active");
    $(".bar3").toggleClass("bar3_active");
  });
  // NAVBAR TOGGLE BUTTON END
  
// AUTO TYPE START
var typed = new Typed('.auto_text', {
    strings: ["Freelancer", "UI/UX Designer", "Web Designer"],
    typeSpeed: 35,
    backSpeed: 30,
    loop:true,
  });
// AUTO TYPE END

// BANNER SLICK WRAPPER START
  $('.banner_slick_wrapper').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// BANNER SLICK WRAPPER END



// REVIEW SLICK WRAPPER START
$('.review_slick').slick({
  infinite: true,
  arrows: true,
  nextArrow: ".right_btn",
  prevArrow: ".left_btn",
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// REVIEW SLICK WRAPPER END


});