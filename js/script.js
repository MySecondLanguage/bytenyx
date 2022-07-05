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
            $(".navbar-fixed-top").css({ "background-color": "#FFFFFF", 'padding': '20px' });
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
    })

    $(window).scroll(function () {
        $("#myBtn").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 0);
        })
    });
})
