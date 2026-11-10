/* =========================
   ZOMATO FRONTEND JAVASCRIPT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo img");

    // Select elements
    const header = document.querySelector("header");
    const heroImage = document.querySelector("main > img");
    const searchInput = document.querySelector("main input");
    const searchButton = document.querySelector("main button");
    const heroText = document.querySelector("main p");
    const footer = document.querySelector("footer");

    /* =========================
       PAGE LOAD ANIMATIONS
       ========================= */

    header.classList.add("slide-down");

    heroImage.classList.add("slide-up");

    heroText.classList.add("fade-in");

    searchInput.classList.add("slide-up");

    searchButton.classList.add("slide-up");

    footer.classList.add("fade-in");


    /* =========================
       SEARCH FUNCTIONALITY
       ========================= */

    function performSearch() {

        const query = searchInput.value.trim();

        if (query === "") {

            searchInput.focus();

            searchInput.style.boxShadow =
                "0 0 0 3px rgba(255, 220, 220, 0.8)";

            setTimeout(() => {
                searchInput.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.2)";
            }, 1000);

            return;
        }

        alert(
            `Searching for "${query}"...\n\n` +
            `This is a frontend demo.`
        );

        console.log("Search Query:", query);
    }


    searchButton.addEventListener("click", performSearch);


    /* =========================
       ENTER KEY SEARCH
       ========================= */

    searchInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            performSearch();
        }

    });


    /* =========================
       INPUT TYPING EFFECT
       ========================= */

    searchInput.addEventListener("input", () => {

        if (searchInput.value.length > 0) {

            searchInput.style.border =
                "2px solid #e23744";

        } else {

            searchInput.style.border =
                "2px solid transparent";

        }

    });


    /* =========================
       LOGO CLICK
       ========================= */

    logo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        logo.style.transform = "scale(0.9)";

        setTimeout(() => {
            logo.style.transform = "scale(1)";
        }, 150);

    });


    /* =========================
       NAVIGATION CLICK EFFECT
       ========================= */

    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const linkText =
                link.getAttribute("href");

            console.log("Navigation clicked:", linkText);

            alert(
                `${linkText} section clicked.\n\n` +
                `This is a frontend demo.`
            );

        });

    });


    /* =========================
       BUTTON RIPPLE EFFECT
       ========================= */

    searchButton.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(
            rect.width,
            rect.height
        );

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,0.3)";
        ripple.style.pointerEvents = "none";

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        ripple.style.transform = "scale(0)";
        ripple.style.opacity = "1";

        ripple.style.transition =
            "transform 0.6s ease, opacity 0.6s ease";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.style.transform = "scale(2)";
            ripple.style.opacity = "0";

        }, 10);

        setTimeout(() => {

            ripple.remove();

        }, 650);

    });


    /* =========================
       PARALLAX EFFECT
       ========================= */

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;

        if (heroImage) {

            heroImage.style.transform =
                `translateY(${scrollPosition * 0.08}px)`;

        }

    });


    /* =========================
       CONSOLE MESSAGE
       ========================= */

    console.log(
        "%c Welcome to Zomato Clone 🍕 ",
        "color: #e23744; font-size: 18px; font-weight: bold;"
    );

});