/*----------------------------------------------------------------

	Template Name: Lewis - Creative Portfolio HTML Template 
	Version: 1.0

	-------------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Animsition Activation 
	02. Wow Activation 
	03. Mainmenu 
	04. Masonry
	05. Progressbar
	06. Counters
	07. Timer
	08. Background Hover Change
	09. Home Minimal
	10. Bind Links
	11. Piling Play Video
	12. Carousels Activation
	13. Video Background
	__ End Js Activation

***************************************************************/

(function($) {
    'use strict';

    /*-------------------------------------------------------------------------------
      Animsition init
    -------------------------------------------------------------------------------*/

    $('.animsition').animsition({
        loadingClass: 'preloader',
        loadingInner: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    });


    /*-------------------------------------------------------------------------------
      Wow init
    -------------------------------------------------------------------------------*/

    new WOW({
        mobile: false
    }).init();


    /*-------------------------------------------------------------------------------
      Menu
    -------------------------------------------------------------------------------*/

    $('.a-nav-toggle').on('click', function() {
        if ($('html').hasClass('body-menu-opened')) {
            $('html').removeClass('body-menu-opened').addClass('body-menu-close');
        } else {
            $('html').addClass('body-menu-opened').removeClass('body-menu-close');
        }
    });

    $('.navbar-nav .dropdown').on({
        mouseenter: function() {
            $(this).find('.dropdown-menu').show();
        },
        mouseleave: function() {
            $(this).find('.dropdown-menu').hide();
        }
    });

    var offset = $(window).height();
    if ($('.a-affix').length) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= offset) {
                $('.header').addClass('header-affix');
            } else {
                $('.header').removeClass('header-affix');
            }
        });
    };


    /*-------------------------------------------------------------------------------
      Masonry
    -------------------------------------------------------------------------------*/

    $(window).on('load', function() {
        if ($('.a-grid').length) {
            $('.a-grid').isotope({
                itemSelector: '.grid-item'
            });
            $('.a-grid-filter a').on('click', function() {
                $(this).parents('.a-grid-filter').find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                $('.a-grid').isotope({
                    filter: filterValue
                });
            });
        }

        if ($('.a-grid-line').length) {
            $('.a-grid-line').isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows'
            });
            $('.a-grid-filter a').on('click', function() {
                $(this).parents('.a-grid-filter').find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                $('.a-grid-line').isotope({
                    filter: filterValue
                });
            });
        }
    });


    /*-------------------------------------------------------------------------------
      Progressbar
    -------------------------------------------------------------------------------*/

    if ($('.a-progressbar').length) {
        function progressbar() {
            $('.a-progressbar .progress-bar:in-viewport').each(function() {
                if (!$(this).hasClass('animated')) {
                    $(this).addClass('animated');
                    $(this).width($(this).attr('aria-valuenow') + '%');
                }
            });
        }

        progressbar();

        $(window).on('scroll', function() {
            progressbar();
        });
    }


    /*-------------------------------------------------------------------------------
      Counters
    -------------------------------------------------------------------------------*/

    if ($('.a-counter').length) {
        function counter() {
            $('.a-counter:in-viewport').each(function() {
                if (!$(this).hasClass('animated')) {
                    $(this).addClass('animated');
                    var thisElement = $(this);
                    $({
                        count: 0
                    }).animate({
                        count: thisElement.attr('data-value')
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function step() {
                            var mathCount = Math.ceil(this.count);
                            thisElement.text(mathCount.toLocaleString('en-IN', {
                                maximumSignificantDigits: 3
                            }));
                        }
                    });
                }
            });
        };
        counter();
        $(window).on('scroll', function() {
            counter();
        });
    }


    /*-------------------------------------------------------------------------------
      Timer
    -------------------------------------------------------------------------------*/

    if ($('.a-timer').length) {
        $('.a-timer').countdown('2020/10/10', function(event) {
            $(this).html(event.strftime('<div class="timer-item"><span>%D</span> Days</div><div class="divider"></div><div class="timer-item"><span>%H</span> Hours</div><div class="divider"></div><div class="timer-item"><span>%M</span> Minutes</div><div class="divider"></div><div class="timer-item"><span>%S</span> Seconds</div>'));
        });
    }


    /*-------------------------------------------------------------------------------
      Background Hover Change
    -------------------------------------------------------------------------------*/

    $('.a-change-bg').on('mouseover', function() {
        var index = $('.a-change-bg').index(this);
        $('.slide-bg-list .slide-bg').removeClass('active').eq(index).addClass('active');
    });


    /*-------------------------------------------------------------------------------
      Home Minimal
    -------------------------------------------------------------------------------*/

    $('.a-minimal a').on({
        mouseenter: function() {
            $('body').addClass('dark-horizontal');
            var index = $(this).index();
            $('.promo-minimal-hover .minimal-item').eq(index).addClass('visible');
            $('.promo-minimal .minimal-item').addClass('over');
        },
        mouseleave: function() {
            $('body').removeClass('dark-horizontal');
            var index = $(this).index();
            $('.promo-minimal-hover .minimal-item').eq(index).removeClass('visible');
            $('.promo-minimal .minimal-item').removeClass('over');
        }
    });


    /*-------------------------------------------------------------------------------
      Bind Links
    -------------------------------------------------------------------------------*/

    $('.flash-item-nav a, .a-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
        }, 1000);
        event.preventDefault();
    });


    /*-------------------------------------------------------------------------------
      Piling Play Video
    -------------------------------------------------------------------------------*/



    function resizeVideo() {
        var width = $(window).width();
        var height = $(window).height();
        $('.a-video').each(function() {
            var iWidth = $(this).data('vimeo-width');
            var iHeight = $(this).data('vimeo-height');

            if (height / width > iHeight / iWidth) {
                $(this).find('iframe').css({
                    'width': '500%',
                    'height': '100%'
                });
            } else {
                $(this).find('iframe').css({
                    'width': '100%',
                    'height': '500%'
                });
            }
        });
    }

    resizeVideo();

    $(window).resize(function() {
        resizeVideo();
    });


    /*-------------------------------------------------------------------------------
      Carousels
    -------------------------------------------------------------------------------*/

    if ($('.a-project-carousel').length) {
        var owl = $('.a-project-carousel');
        owl.owlCarousel({
            smartSpeed: 750,
            dots: false,
            nav: true,
            autoplay: false,
            loop: true,
            margin: 5,
            autoplayHoverPause: true,
            navText: ['<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>', '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>'],
            items: 1
        });
        owl.trigger('stop.owl.autoplay')
        $(window).bind('scroll', function(event) {
            if ($('.a-play').hasClass('animated')) {
                owl.trigger('play.owl.autoplay', [7000]);
            }
        });

        $('.project-carousel-3d .owl-next').on({
            mouseenter: function() {
                $('.project-carousel-3d').addClass('move-left');
            },
            mouseleave: function() {
                $('.project-carousel-3d').removeClass('move-left');
            }
        });
        $('.project-carousel-3d .owl-prev').on({
            mouseenter: function() {
                $('.project-carousel-3d').addClass('move-right');
            },
            mouseleave: function() {
                $('.project-carousel-3d').removeClass('move-right');
            }
        });
    }

    if ($('.a-article-promo-carousel').length) {
        $('.a-article-promo-carousel').owlCarousel({
            smartSpeed: 750,
            dots: true,
            nav: true,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            navText: ['<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>', '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>'],
            items: 1
        });
    }

    if ($('.a-reviews-carousel').length) {
        $('.a-reviews-carousel').owlCarousel({
            smartSpeed: 750,
            dots: true,
            margin: 30,
            nav: false,
            items: 1
        });
    }

    if ($('.a-photo-carousel').length) {
        $('.a-photo-carousel').owlCarousel({
            items: 3,
            smartSpeed: 750,
            margin: 8,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
            navText: ['<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>', '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>'],
            dotData: false,
            responsive: {
                0: {
                    nav: false,
                    items: 1
                },
                900: {
                    nav: true,
                    items: 3
                }
            }
        });
    }


    /*-------------------------------------------------------------------------------
      Video Background
    -------------------------------------------------------------------------------*/
    let currentPage = 5

    window.onload = function() {
        if (window.location.href.indexOf("navigation-panel") > -1) {
            paintLink(currentPage);
        }
    };

    function resizeIframe() {
        var width = $(window).width();
        var height = $(window).height();

        if (width < 768) {
            $('.video-text-container').addClass('owl-carousel owl-theme');
            $('.video-text-container').owlCarousel({
                smartSpeed: 1000,
                dots: true,
                nav: false,
                items: 1,
                lazyLoad: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 7000,
                autoplayHoverPause: true,
                mouseDrag: true,
                touchDrag: true
            });
            $('.video-text-container').on('translated.owl.carousel', function(e) {
                $(this).find('.video-text-item.is-active').removeClass('is-active');
                $(this).find('.owl-item.active .video-text-item').addClass('is-active');
            });
        } else {
            $('.owl-carousel .video-text-item.is-active').removeClass('is-active');
            $('.video-text-container').removeClass('owl-carousel owl-theme').trigger('destroy.owl.carousel');
        }

        $('.video-item').each(function() {
            var iWidth = $(this).data('vimeo-width');
            var iHeight = $(this).data('vimeo-height');
            var index = $(this).data('portrait-index');

            if (height / width > iHeight / iWidth) {
                $('.video-item[data-portrait-index=' + index + '] .iframe-css').html('<style>.video-item[data-portrait-index="' + index + '"] iframe {width: 500%; height:100%;}</style>')
            } else {
                $('.video-item[data-portrait-index=' + index + '] .iframe-css').html('<style>.video-item[data-portrait-index="' + index + '"] iframe {width: 102%; height:500%;}</style>')
            }
        });
    }

    resizeIframe();

    $(window).resize(function() {
        resizeIframe();
    });

    $('.circular-name, .circle-dot').on({
        click: function() {
            var index = $(this).data('portrait-index');
            switch (index) {
                case 1:
                    currentPage = 5
                    break;
                case 2:
                    currentPage = 4
                    break;
                case 3:
                    currentPage = 3
                    break;
                case 4:
                    currentPage = 2
                    break;
                default:
                    currentPage = 1
            }
            console.log(currentPage);
        }
    });


    $('.circular-name, .circle-dot').on({
        mouseenter: function() {
            var index = $(this).data('portrait-index');
            $('.circular-name').removeClass('is-init');
            $('.circular-name[data-portrait-index=' + index + ']').addClass('is-init');
        },
        mouseleave: function() {
            $('.circular-name').removeClass('is-init');
            if (!$('.circular-name').hasClass('is-active')) {
                $('.circular-name').addClass('is-init');
            }
        }
    });

    // var dStart = 2644;
    // var magicAngles = [9999, 0, 1992, 1327, 670];

    var dStart = 2644;
    var magicAngles = [9999, 2108, 1580, 1050, 530, 0];

    var findDotIndex = function(a, direction) {
        if (direction == 'forward') {
            for (var i = 0; i <= magicAngles.length - 1; i++) {
                if (a >= magicAngles[i]) {
                    return i;
                }
            }
        } else {
            for (var i = magicAngles.length - 1; i > 0; i--) {
                if (a <= magicAngles[i]) {
                    return i;
                }
            }
        }
    };

    var drawing = function drawing(dStart, dStop, selector) {
        var direction = dStart <= dStop ? 'backward' : 'forward';
        $({
                n: dStart
            })
            .animate({
                n: dStop
            }, {
                easing: 'linear',
                duration: 1000,
                step: function(a) {

                    $('.' + selector).css({
                        'stroke-dashoffset': a | 0
                    });

                    var index = findDotIndex(a, direction);
                    if (selector == 'st1') {
                        setTimeout(function() {
                            $("circle").css({
                                stroke: 'white'
                            });
                            $('.circle-dot[data-portrait-index=' + index + '] .circle-outside')
                                .css({
                                    opacity: direction == 'forward' ? 1 : 0.2,
                                    stroke: 'white'
                                }, {
                                    duration: 500
                                });
                        }, 300)
                    }

                }
            });
    };

    $('.circular-name, .circle-dot').hover(function() {
        if ($(this).hasClass('is-active')) {
            return;
        }

        var index = $(this).data('portrait-index');

        $('.circular-name').removeClass('is-active');
        $('.circle-dot.is-active, .circular-name.is-active, .video-text-item.is-active').removeClass('is-active');
        $('.circle-dot[data-portrait-index=' + index + '], .circular-name[data-portrait-index=' + index + '], .video-text-item[data-portrait-index=' + index + ']').addClass('is-active');
        $('.circle-dot[data-portrait-index=' + index + '] .circle-outside').delay(1000).animate({
            opacity: 1
        });

        drawing(dStart, magicAngles[index], 'st1');
        dStart = magicAngles[index];

    });

    $(window).on('load', function() {
        $('.video-item:first-child').addClass('is-active');
        setTimeout(function() {
            $('.video-text-item[data-portrait-index="0"]').addClass('is-active');
            drawing(2644, 0, 'st0');
        }, 300);
    });

    function paintLink(index) {
        console.log(index)
        $('.navigation-menu-text[data-portrait-index=' + index + ']').addClass('navigation-menu-text-selected');
        $('.dottedHR[data-portrait-index=' + index + ']').addClass('dottedHR-selected');
        $('.navigation-menu-text[data-portrait-index=' + index + ']').removeClass('navigation-menu-text');
        $('.dottedHR[data-portrait-index=' + index + ']').removeClass('dottedHR hidden');
    }

    /*-------------------------------------------------------------------------------
      Navigation Background
    -------------------------------------------------------------------------------*/


    $('.navigation-menu-text').on({
        mouseenter: function() {
            var index = $(this).data('portrait-index');
            $('.dottedHR[data-portrait-index=' + index + ']').removeClass('hidden');
        },
        mouseleave: function() {
            var index = $(this).data('portrait-index');
            $('.dottedHR[data-portrait-index=' + index + ']').addClass('hidden');
        }
    });

    $('.lenguage-tag').on({
        mouseenter: function() {
            var index = $(this).data('portrait-index');
            $('.copyright[data-portrait-index=' + index + ']').removeClass('language-button-border-normal');
            $('.copyright[data-portrait-index=' + index + ']').addClass('language-button-border-hover');
        },
        mouseleave: function() {
            var index = $(this).data('button-index');
            $('.copyright[data-portrait-index=' + index + ']').removeClass('language-button-border-hover');
            $('.copyright[data-portrait-index=' + index + ']').addClass('language-button-border-normal');
        }
    });

    /*-------------------------------------------------------------------------------
      Expertise
    -------------------------------------------------------------------------------*/

    $('.software-icon').on('click', function() {
        $('#exampleModalCenter').modal('toggle');
        $('#softwareFactory').addClass('active');
    });

    $('.ui-icon').on('click', function() {
        $('#exampleModalCenter').modal('toggle');
        $('#UX').addClass('active');
    });

    $('.agile-icon').on('click', function() {
        $('#exampleModalCenter').modal('toggle');
        $('#cloudDev').addClass('active');
    });

    $('.cloud-icon').on('click', function() {
        $('#exampleModalCenter').modal('toggle');
        $('#agile').addClass('active');
    });

    $('.close').on('click', function() {
        $('#exampleModalCenter').modal('toggle');
        $('#softwareFactory').removeClass('active');
        $('#agile').removeClass('active');
        $('#cloudDev').removeClass('active');
        $('#UX').removeClass('active');
    });

    /*-------------------------------------------------------------------------------
      Metodolog??a
    -------------------------------------------------------------------------------*/

    $('.switch').on('click', function() {

    });


    /*-------------------------------------------------------------------------------
      Clientes
    -------------------------------------------------------------------------------*/
    $('.img1 img').attr('src');

}($));