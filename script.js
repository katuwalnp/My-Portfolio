/* =====================================================
   NARENDRA KATUWAL PORTFOLIO
   JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    const themeBtn = document.getElementById("themeBtn");

    const backTop = document.getElementById("backTop");

    const year = document.getElementById("year");

    const navLinks = document.querySelectorAll(".nav-link");


    /* =================================================
       CURRENT YEAR
    ================================================= */

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("show")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }


    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* =================================================
       BACK TO TOP
    ================================================= */

    function updateBackTop() {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        updateBackTop
    );


    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =================================================
       DARK MODE
    ================================================= */

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );

        if (isDark) {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });


    /* =================================================
       ESCAPE KEY
    ================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            navbar.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* =================================================
       SMOOTH INTERNAL LINKS
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function(event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    !document.querySelector(targetId)
                ) {

                    return;

                }

                event.preventDefault();

                const target =
                    document.querySelector(targetId);

                const headerHeight = 75;

                const targetPosition =
                    target.offsetTop - headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            });

        });


    /* =================================================
       INITIALIZE
    ================================================= */

    updateActiveNav();

    updateBackTop();

});