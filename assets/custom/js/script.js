(function ($) {
    'use strict';

    $(window).load(function () {

        /* Image cache */
        $('.gallery-item').each(function() {
            var src = $(this).attr('href');
            var img = document.createElement('img');

            img.src = src;
            $('#image-cache').append(img);
        });

    });

    $(document).ready(function () {

        /* Sticky Header */
        $(".sticky-header").sticky({topSpacing: 0});

        /* Slider Revolution */


        // Slider0 for John

        $("#slider0").revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            autoHeight: "on",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,
                    swipe_direction: "horizontal"
                },
                arrows: {
                    style: "hades",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: true,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                },
                bullets: {
                    style: "",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 7,
                    h_offset: 0,
                    v_offset: 40,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                }
            },

            lazyType: "smart",
            disableProgressBar: "off",
            responsiveLevels: [4000, 1200, 992, 768, 320],
            gridwidth: [1130, 910, 580, 300],
            gridheight: [600, 800, 1024, 568]
        });


        // Slider1 for Jessica and Samantha

        $("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            autoHeight: "on",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: false,
                    swipe_direction: "horizontal"
                },
                arrows: {
                    style: "hades",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: true,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                },
                bullets: {
                    style: "",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 7,
                    h_offset: 0,
                    v_offset: 40,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                }
            },

            lazyType: "smart",
            disableProgressBar: "off",
            responsiveLevels: [4000, 1200, 992, 768, 320],
            gridwidth: [1130, 910, 580, 300],
            gridheight: [600, 800, 1024, 568]
        });

        /* Preloader */
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

        /* Jarallax */
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.7
        });

        /* Animated Counter */
        $('.count-container span').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });

        /* Magnific Popup */
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /* Progress Tracker */
        (function () {
            $('body').progressTracker({

                // Allows for navigating between content sections
                linking: true,

                // "constant" = always visiable
                // "hover" = shows on mouse hover
                tooltip: "hover",

                // The number specified is added to the default value at which the tracker changes to the next section.
                positiveTolerance: 0,

                // The number specified is subtracted from the default value at which the tracker changes to the next section.
                negativeTolerance: 60,

                // Only displays the progress tracker when the user is between the top of the first section and the bottom of the last;
                // It is only shown when the tracker sections are in view.
                // Specify false if you want the tracker to always show.
                displayWhenActive: false,

                // Specify the value (in pixels) that you wish the progress tracker to be hidden when it is below that.
                disableBelow: 0,

                // Specifies what the plugin takes into account when deciding when to switch to the next section.
                // "tracker" or "viewport"
                tracking: "viewport"

            });

            // Register custom scrollTop
            $('.progress-tracker ul li a.pt-circle').off('click').on('click', function(e) {
                softScroll(this, e);
            });

        })();

        /* Soft Scroll */
        (function () {
            $('.nav a, .menu-item a').click(function (e) {
                softScroll(this, e);

                window.setTimeout(function() {
                    classie.remove(document.body, 'show-menu');
                }, 500);
                return false;
            });
            $('.scrollTop a').scrollTop();
        })();

        /* Off-Canvas Menu */
        (function () {

            var bodyEl = document.body,
                content = document.querySelector('.content-wrap'),
                openbtn = document.getElementById('open-button'),
                closebtn = document.getElementById('close-button');

            function init() {
                initEvents();
            }

            function initEvents() {
                openbtn.addEventListener('click', toggleMenu);
                if (closebtn) {
                    closebtn.addEventListener('click', toggleMenu);
                }

                // close the menu element if the target it´s not the menu element or one of its descendants..
                content.addEventListener('click', function (ev) {
                    var target = ev.target;
                    if (classie.hasClass(bodyEl, 'show-menu') && target !== openbtn) {
                        toggleMenu();
                    }
                });
            }

            function toggleMenu() {
                $( bodyEl ).toggleClass( 'show-menu' );
            }

            init();

        })();

        /* Isotope Portfolio */
        (function () {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-sizer'
                }
            });

            grid.imagesLoaded(function () {
                grid.isotope();
            });

            grid.isotope({filter: '*'});

            // filter items on button click
            $('#isotope-filters').on('click', 'a', function () {
                var filterValue = $(this).attr('data-filter');
                grid.isotope({filter: filterValue});
            });

        })();

        /* Back to top */
        (function () {
            $("#back-top").hide();

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        })();

    });

    // Soft scroll
    var softScroll = function(target, event) {
        event.preventDefault();
        var targetNavElem = $(target).attr('href');
        if (targetNavElem[0] != '#') {
            window.open(
                targetNavElem,
                $(target).attr('target') == '_blank' ? '_blank' : '_self');
            return false;
        }

        var targetScrollPos = $(targetNavElem).offset().top - $('header .mp-nav').height() + 40;

        if (window.pageYOffset > targetScrollPos) {
            $('html, body').animate({
                scrollTop: targetScrollPos - 60
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: targetScrollPos + 60
            }, 1000);
        }

        $('html, body').animate({
            scrollTop: targetScrollPos
        }, 600);
    };
})(jQuery);
