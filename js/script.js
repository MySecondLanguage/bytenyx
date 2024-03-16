// toggle navbar
$(document).ready(function () {
  $("#classTwo").click(function () {
    $("#classOne").toggle();

    $("i", this).toggleClass("fa-regular fa-xmark");
  });
});

// scroll on view navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar-fixed-top").css({
        "background-color": "#FFFFFF",
        padding: "20px",
      });
    } else {
      $(".navbar-fixed-top").css("background-color", "transparent");
    }
  });
});

// goto top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#myBtn").fadeIn();
    } else {
      $("#myBtn").fadeOut();
    }
  });

  $(window).scroll(function () {
    $("#myBtn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
    });
  });
});

// Owl Carousel
$(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: false,
    nav: false,
    dots: false,
    margin: 30,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 3,
      },
    },
  });
});


$(document).ready(function(){
  $('#contact').click(function(event){
      event.preventDefault(); // Prevent the default anchor behavior
      var href = $(this).attr('href'); // Get the href attribute of the anchor
      // Check if element with class 'calendly-badge-content' exists
      if($('.calendly-badge-content').length) {
          $('.calendly-badge-content').trigger('click');
      } else {
          // If class not found, redirect to the URL specified in the anchor tag's href attribute
          window.location.href = href;
      }
  });
});