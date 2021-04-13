/*-----------------------------------------------------------------------------------

    Theme Name: Arrow
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";

    var wind = $(window);


    /* ----------------------------------------------------------------
                    [ Navbar ( scrollIt ) ]
    -----------------------------------------------------------------*/

    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -80 // offste (in px) for fixed top navigation
    });


    /* ----------------------------------------------------------------
                    [ Navbar ( Change Background & Logo ) ]
    -----------------------------------------------------------------*/

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });


    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    /* ----------------------------------------------------------------
                    [ Progress Bar ]
    -----------------------------------------------------------------*/

    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* ----------------------------------------------------------------
                    [ Sections Background Image From Data ]
    -----------------------------------------------------------------*/

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /* ----------------------------------------------------------------
                    [ Owl-Carousel ]
    -----------------------------------------------------------------*/

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });

    // Services owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 60,
        mouseDrag: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                autoplay: true,
            },
            600: {
                items: 3,
                autoplay: true,
            },
            1000: {
                items: 6,
                autoplay: false,
            }
        }
    });

    // === End owl-carousel === //


    /* ----------------------------------------------------------------
                [ Services Tabs ]
-----------------------------------------------------------------*/

    $(".services .tabs-icon").on("click", ".item", function () {

        $(".item").removeClass("active");

        var myID = $(this).attr("id");

        $(".services .cont").hide();

        $("#" + myID + "-content").fadeIn();

    });

    $(".services .tabs-icon").on("click", ".owl-item", function () {

        $(this).addClass("actived").siblings().removeClass("actived");

    });


    /* ----------------------------------------------------------------
                    [ magnificPopup ]
    -----------------------------------------------------------------*/

    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* ----------------------------------------------------------------
                    [ YouTubePopUp ]
    -----------------------------------------------------------------*/

    $("img.aztech").YouTubePopUp();


    /* ----------------------------------------------------------------
                    [ countUp ]
    -----------------------------------------------------------------*/

    $('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });

});


// === window When Loading === //

$(window).on("load", function () {

    var wind = $(window);

    /* ----------------------------------------------------------------
                    [ Preloader ]
    -----------------------------------------------------------------*/

    $(".loading").fadeOut(500);


    /* ----------------------------------------------------------------
                    [ stellar ( Parallax ) ]
    -----------------------------------------------------------------*/

    wind.stellar();


    /* ----------------------------------------------------------------
                    [ isotope Portfolio ( Masonery Style ) ]
    -----------------------------------------------------------------*/

    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({
            filter: filterValue
        });

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

});

// Slider 
$(document).ready(function () {

    var owl = $('.header .owl-carousel');


    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500
    });

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('h1').removeClass('animated fadeInRight');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

    text_arr = [];
    click_arr = [];
    for (var i = 0; i < 6; i++) {

        var html = $("#show-hide-" + i).html().trim();
        text_arr.push(html);
        click_arr.push(1);
        showmore(i);
    }

});

function showmore(number) {
    var html = text_arr[number];


    if (click_arr[number] % 2 == 0) {
        var btn = '<a href="javascript:void(0)" class="ar-class" style="color:#a50d0d;" onclick="showmore(' + number + ')"><span>See less</span></a>';
        html += '&nbsp;&nbsp;' + btn;
        $("#show-hide-" + number).html(html);
    } else {
        var btn = '<a href="javascript:void(0)" class="ar-class" style="color:#a50d0d;" onclick="showmore(' + number + ')"><span>See more</span></a>';
        var html2 = html.substr(0, 200);
        $("#show-hide-" + number).html(html2 + '&nbsp;&nbsp;' + btn);
    }
    click_arr[number]++;
}
