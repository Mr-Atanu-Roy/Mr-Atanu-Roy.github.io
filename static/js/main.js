// Dynamic section rendering
try {
    const worksSection = document.getElementById("works");
    if (worksSection) renderWorks(worksSection);

    const blogsSection = document.getElementById("blogs");
    if (blogsSection) renderBlogs(blogsSection);
} catch (error) {
    console.log("Error rendering dynamic sections.");
    console.log(error);
}

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
    ["hero", "about", "works", "blogs", "contact"].forEach(
        function (sectionId) {
            if (document.getElementById(sectionId)) {
                particlesJS.load(
                    sectionId,
                    "./static/js/particlesjs-config.json",
                    function () {
                        console.log(
                            "particles.js config loaded for " + sectionId,
                        );
                    },
                );
            }
        },
    );
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

// Sliding Pill Active Nav Link Highlighting on Scroll
try {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("header nav ul li a[href^='#']:not(#header-contactMe-btn)");
    const pill = document.getElementById("nav-active-pill");
    const navUl = document.querySelector("header nav ul");

    function highlightNavLink() {
        if (!pill || !navUl || window.innerWidth < 768) return; // Only on desktop

        let currentScroll = window.scrollY;
        let activeLink = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 200; // Adjust offset for header
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        activeLink = link;
                        link.classList.add("text-purple");
                        link.classList.remove("text-white", "hover:text-white");
                    } else {
                        link.classList.remove("text-purple");
                        link.classList.add("hover:text-white");
                    }
                });
            }
        });

        if (activeLink) {
            const ulRect = navUl.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            
            const left = linkRect.left - ulRect.left;
            const top = linkRect.top - ulRect.top;
            
            pill.style.width = `${linkRect.width}px`;
            pill.style.height = `${linkRect.height}px`;
            pill.style.transform = `translate(${left}px, ${top}px)`;
            pill.classList.remove("opacity-0");
            pill.classList.add("opacity-100");
        } else {
            pill.classList.remove("opacity-100");
            pill.classList.add("opacity-0");
        }
    }

    window.addEventListener("scroll", highlightNavLink);
    window.addEventListener("resize", highlightNavLink); // Update on resize
    // Small delay on load to ensure fonts and layout are ready
    setTimeout(highlightNavLink, 100); 
} catch (error) {
    console.log("Error highlighting active nav link");
    console.log(error);
}

// Mouse gradient effect
try {
    const overlay = document.getElementById("mouse-gradient-overlay");
    if (overlay) {
        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            overlay.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(168, 126, 250, 0.08), transparent 40%)`;
        });
    }
} catch (error) {
    console.log("Error initializing mouse gradient");
    console.log(error);
}
