(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    $(document).ready(function(){
        var owl = $(".header-carousel").owlCarousel({
            animateOut: 'slideOutDown',
            items: 1,
            autoplay: true,
            smartSpeed: 800,
            dots: true,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
        });
    });
    
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Owl Carousel
    $(document).ready(function(){
        var $carousel = $(".testimonial-carousel");
    
        $carousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    
        function limitDots() {
            var dots = $carousel.find('.owl-dot');
            var maxDots = 4; 
    
            if (dots.length > maxDots) {
                dots.each(function(index) {
                    $(this).toggle(index < maxDots);
                });
            }
        }
    
        function updateActiveDot() {
            var dots = $carousel.find('.owl-dot:visible');
            var activeIndex = $carousel.find('.owl-item.active').index();
            
            dots.removeClass('active');
            
            var dotIndex = activeIndex % dots.length;
            dots.eq(dotIndex).addClass('active');
        }
    
        limitDots();
        updateActiveDot();
    
        $carousel.on('changed.owl.carousel', function() {
            limitDots();
            updateActiveDot();
        });
    });

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutRight',
        animateIn: 'slideInRight',
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    $(document).ready(function() {
        $('.scrollToSlow').on('click', function(e) {
            e.preventDefault();
    
            var targetElement = document.getElementById('bookingnow');
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    
            setTimeout(function() {
                window.scrollBy(0, -90);
            }, 1500);
        });
    });
    
    
    
})(jQuery);

$(function () {
    $('#date3').datetimepicker({
        format: 'YYYY-MM-DD HH:mm',
        useCurrent: false
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var datetime = $('#datetime').val();
        var number = $('#number').val();
        var message = $('#message').val();

        var fullMessage = `Name: ${name}\nEmail: ${email}\nDate & Time: ${datetime}\nNumber of Participants: ${number}\nSpecial Request: ${message}`;

        var whatsappMessage = encodeURIComponent(fullMessage);

        var whatsappNumber = '6285708646867';
        var whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


        window.location.href = whatsappURL;
    });
});

document.getElementById('buyBasicClassBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    var phoneNumber = '6285708646867'; 
    var className = this.getAttribute('data-classname'); 
    var buyBasicClassMessage = `Halo, saya tertarik untuk membeli kelas ${className}.`;
    var buyBasicClassWhatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(buyBasicClassMessage)}`;

    window.location.href = buyBasicClassWhatsappURL;
});

document.getElementById('buyProClassBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    var phoneNumber = '6285708646867'; 
    var className = this.getAttribute('data-classname'); 
    var buyProClassMessage = `Halo, saya tertarik untuk membeli kelas ${className}.`;
    var buyProClassWhatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(buyProClassMessage)}`;

    window.location.href = buyProClassWhatsappURL;
});

document.querySelectorAll('.buyStandardClassBtn').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        var phoneNumber = '6285708646867'; 
        var className = this.getAttribute('data-classname'); 
        var buyClassMessage = `Halo, saya tertarik untuk membeli kelas ${className}.`;
        var buyClassWhatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(buyClassMessage)}`;

        window.location.href = buyClassWhatsappURL;
    });
});

$(document).ready(function () {
    $('.navbar-nav a, .btn').on('click', function(event) {
        // Cek apakah tombol yang diklik adalah submit button
        if ($(this).closest('form').length === 0 && this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Hapus class 'active' dari semua nav-link jika "Book A Class" diklik
            $('.navbar-nav .nav-link').removeClass('active');

            if (hash === "#bookingclass") {
                $('.navbar-nav a').removeClass('active');
            }

            var stopPoint = 10; 
            var targetPosition = $(hash).offset().top + stopPoint;

            $('html, body').animate({
                scrollTop: targetPosition
            }, 800);
        }
    });

    // Mengubah status active berdasarkan scroll
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav a').removeClass("active");
                currLink.addClass("active");
            }
        });
    });
});

$(document).ready(function () {
    $('.navbar-collapse a, .navbar-collapse button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
