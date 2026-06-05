//scroll animation
try {
    AOS.init({
        duration: 500,
        once: true,
        mirror: false,
    });
} catch (error) {
    console.log("Error occurred");
    console.log(error);
}

//particle js background animation
try {
    ["hero", "about", "blogs", "contact"].forEach(function (sectionId) {
        if (document.getElementById(sectionId)) {
            particlesJS.load(
                sectionId,
                "./static/js/particlesjs-config.json",
                function () {
                    console.log("particles.js config loaded for " + sectionId);
                },
            );
        }
    });
} catch (error) {
    console.log("Error occurred");
    console.log(error);
}

//typing animation
try {
    var heroTyped = new Typed("#hero-role-typing", {
        strings: [
            '<span class="text-yellow">ML</span> engineer',
            '<span class="text-green">Python</span> developer',
            '<span class="text-blue">Backend</span> developer',
            '<span class="text-emerald-500">AI</span> enthusiast',
            '<span class="text-rose-500">Blog</span> Writer',
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
    });
} catch (error) {
    console.log("Error occurred");
    console.log(error);
}

// ScrollToTop btn: Scroll to the top when the button is clicked
try {
    document.getElementById("scrollTopBtn").addEventListener("click", () => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
} catch (error) {
    console.log("Error occurred");
    console.log(error);
}

// footer year
try {
    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
} catch (error) {
    console.log("Error occurred");
    console.log(error);
}

// Header toggle for mobile devices
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("opacity-0")) {
        menu.classList.remove("opacity-0", "pointer-events-none");
        menu.classList.add("opacity-100", "pointer-events-auto");
        document.body.style.overflow = "hidden";
    } else {
        menu.classList.remove("opacity-100", "pointer-events-auto");
        menu.classList.add("opacity-0", "pointer-events-none");
        document.body.style.overflow = "auto";
    }
}
