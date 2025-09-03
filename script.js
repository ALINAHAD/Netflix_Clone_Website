
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,

                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                }
            }
        });
