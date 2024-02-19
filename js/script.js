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

// Video Apperaing

// $(document).ready(function () {
//   var video = document.getElementById("vemo-videos");
//   var isMouseMoved = false;

//   $("#video-popup").fadeIn();

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//       $("#video-popup").fadeOut();
//     } else {
//       $("#video-popup").fadeIn();
//     }
//   });

//   $(window).mousemove(function () {
//     if (!isMouseMoved) {
//       video.muted = false;
//       video.play();
//       isMouseMoved = true;
//     }
//   });

//   $("#scroll-btn").click(function () {
//     var offset = $(window).scrollTop() + 100;
//     $("html, body").animate({ scrollTop: offset }, 200);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("vemo-videos");

  function unmuteVideo() {
    video.muted = false;
    video.play();

    console.log(video.muted);
  }

  function muteVideo() {
    video.play();
    video.muted = true;

    console.log(video.muted);
  }

  var videoPopup = document.getElementById("video-popup");
  videoPopup.style.display = "block";
  video.muted = false;
  unmuteVideo();

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      videoPopup.style.display = "none";
      muteVideo();
    } else {
      videoPopup.style.display = "block";
      unmuteVideo();
    }
  });

  var scrollBtn = document.getElementById("scroll-btn");
  scrollBtn.addEventListener("click", function () {
    var offset = window.scrollY + 100;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});
