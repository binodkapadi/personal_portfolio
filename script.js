$(window).on('load', function () {
    // Add a slight delay to ensure a smooth start to the sequence
    setTimeout(function () {
        $('body').addClass('loaded');

        // Remove skeleton background after image is fully revealed
        setTimeout(function () {
            $('#hero-skeleton').css('background', 'transparent');
            $('#hero-skeleton::before').css('display', 'none');
        }, 2000);
    }, 150);
});

$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["AI/ML Engineer", "Developer", "Data Scientist", "Freelancer", "Data Analyst", "Google Cloud Learner", "MLOps Engineer", "NLP Engineer", "Computer Vison Engineer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["AI/ML Engineer", "Developer", "Data Scientist", "Freelancer", "Data Analyst", "Google Cloud Learner", "MLOps Engineer", "NLP Engineer", "Computer Vison Engineer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Contact form submit (sends to Formspree – replace URL with your own form endpoint)
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (contactStatus) {
                contactStatus.style.color = '#111';
                contactStatus.textContent = 'Sending...';
            }

            const formData = new FormData(contactForm);

            fetch('https://formspree.io/f/mwpjdlbn', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(function (response) {
                if (response.ok) {
                    if (contactStatus) {
                        contactStatus.style.color = 'green';
                        contactStatus.textContent = 'Thank you! Your message has been sent.';
                    }
                    contactForm.reset();
                } else {
                    if (contactStatus) {
                        contactStatus.style.color = 'red';
                        contactStatus.textContent = 'Something went wrong. Please try again later.';
                    }
                }
            }).catch(function () {
                if (contactStatus) {
                    contactStatus.style.color = 'red';
                    contactStatus.textContent = 'Network error. Please check your connection and try again.';
                }
            });
        });
    }

    // Project image sliders (Quizify, Notes_summarizer, Codeexplainer, TripAdvisor etc.)
    $('.quizify-slider, .notes-summarizer-slider, .codeexplainer-slider, .tripadvisor-slider').each(function () {
        var $slider = $(this);
        var $track = $slider.find('.slider-track');
        var $slides = $track.find('img');
        var current = 0;
        var total = $slides.length;

        function goTo(index) {
            current = (index + total) % total;
            $track.css('transform', 'translateX(' + (-current * 100) + '%)');
        }

        $slider.find('.slider-arrow.prev').on('click', function () {
            goTo(current - 1);
        });

        $slider.find('.slider-arrow.next').on('click', function () {
            goTo(current + 1);
        });

        // autoplay
        var intervalId = setInterval(function () {
            goTo(current + 1);
        }, 4000);

        // pause on hover
        $slider.on('mouseenter', function () {
            clearInterval(intervalId);
        });
        $slider.on('mouseleave', function () {
            intervalId = setInterval(function () {
                goTo(current + 1);
            }, 4000);
        });

        // init position
        goTo(0);
    });

});