
(function () {

    // *************************************
    //          Owl Jquery Carousel
    // *************************************

    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 50,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

    // *************************************
    //          Animate Numbers
    // *************************************

    const counts = document.querySelectorAll('.count')

    counts.forEach(count => {
        const value = {
            start: 0,
        }

        const end = count.getAttribute('data-count');
        anime({
            targets: value,
            start: end,
            round: 1,
            easing: 'linear',
            duration: 1000 * (end / 100),
            update: function () {
                count.innerHTML = value.start;
            }
        })
    })

    // *************************************
    //          Mobile Menu
    // *************************************

    const mobileBurger = document.querySelector("#mobile");
    const menuPrincipal = document.querySelector("#menu_principal");

    mobileBurger.addEventListener("click", function (e) {
        e.preventDefault();
        menuPrincipal.classList.toggle("open-menu");
    });

    // *************************************
    //          Dropdown Menu
    // *************************************

    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function () {
            this.classList.toggle("open");
        });
    });

    window.addEventListener('click', function (e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    });

    // ***************************************
    //         Humberger
    // ***************************************

    let humbergers = document.querySelectorAll(".humberger");

    humbergers.forEach(humberger => {
        humberger.addEventListener('click', function () {
            this.classList.toggle("open");
        });
    });
})();
