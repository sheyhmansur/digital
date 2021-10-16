// Аккордеон

let acc = document.querySelectorAll('.info_accordion');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


let typed = new Typed('.subheader_title', {
    strings: ["Готовим digital-специалистов с любого уровня. Тысячи студентов проходят обучение прямо сейчас.", "Освоите новую высокооплачиваемую профессию и сможете кардинально изменить свою жизнь."],
    typeSpeed: 60,
    loop: true,
    backSpeed: 15
    // backDelay: 500
  });

  
  

//preloader
$(window).on('load', function() {
    $('#preloader').fadeOut().end().delay(1000).fadeOut('slow');
});


// модальное окно

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');

});
$('.modal_close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});

$(window).on('click', function(e) {
    if (e.target.classList.contains('overlay')) {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    }
});

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            },
            checkbox: ""
        }
    });
}



validateForms('#consultation form');
validateForms('#form');

// Masked

$('input[name=phone]').mask("+7 (999) 999-99-99");




//Ajax 

$('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});



// Smooth scroll and pageup 

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000 && $(this).width() > 600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
    return false;
});

$(function() {
    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 2000);
        return false;
    });
});





new WOW().init();


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu('.burger-menu');

let scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let nav = document.getElementById('nav');
    if (scrolled) {
        nav.classList.add('navigation');
    } else {
        nav.classList.remove('navigation');
    }

};

$(window).on('load resize', function() {
    if ($(window).width() < 1200) {
        $('.promo_information:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".promo_information.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 1200) {
        $('.course-slider:not(.slick-initialized)').slick({
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".course-slider.slick-initialized").slick("unslick");
    }
});


$(window).on('load resize', function() {
    if ($(window).width() < 1200) {
        $('.video-slider:not(.slick-initialized)').slick({
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }]
        });
    } else {
        $(".video-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 520) {
        $('.course_tabs:not(.slick-initialized)').slick({
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
        });
    } else {
        $(".course_tabs.slick-initialized").slick("unslick");
    }
    if ($(window).width() < 1200) {
        $('.study_wrapper:not(.slick-initialized)').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".study_wrapper.slick-initialized").slick("unslick");
    }
});

$(document).ready(function() {
    $('.course-gallery').slick({
        variableWidth: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



let tabsBtn = document.querySelectorAll('.course_tab');
let tabsItems = document.querySelectorAll('.course_inner');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});