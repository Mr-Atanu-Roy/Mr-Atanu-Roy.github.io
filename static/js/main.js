//setting current date in footer
let date_box = document.getElementById("date");
date_box.innerHTML = new Date().getFullYear();

//scroll animation
try {
  AOS.init({
    duration: 500,
    once: true,
    mirror: false,
  });

  //removing and adding scroll animation for education boxes and hero slide down btn
  if (window.innerWidth <= 770) {
    //getting the slide down btn
    let slideDownBtn = document.getElementById("hero-slide-arrow");
    slideDownBtn.setAttribute("data-offset", "0");
    element.setAttribute("data-delay", "0");

    //getting the .left education boxes
    let leftBoxes = document.querySelectorAll(".left .content");

    leftBoxes.forEach(element => {
      if (element.hasAttribute("data-aos")) {
        // Modify the data-aos attribute
        element.setAttribute("data-aos", "fade-left");
      }
    });
  }
} catch (error) {
  console.log("Error ocurred");
  console.log(error);
}

//particle js background animation
try {
  particlesJS.load("hero", "./static/js/particlesjs-config.json", function () {
    console.log("particles.js config loaded-1");
  });
  particlesJS.load(
    "expertise",
    "./static/js/particlesjs-config.json",
    function () {
      console.log("particles.js config loaded-2");
    }
  );
  particlesJS.load(
    "experience",
    "./static/js/particlesjs-config.json",
    function () {
      console.log("particles.js config loaded-3");
    }
  );
  particlesJS.load("works", "./static/js/particlesjs-config.json", function () {
    console.log("particles.js config loaded-4");
  });
  particlesJS.load(
    "education",
    "./static/js/particlesjs-config.json",
    function () {
      console.log("particles.js config loaded-5");
    }
  );
} catch (error) {
  console.log("Error ocurred");
  console.log(error);
}

//typing animation
try {
  var typed1 = new Typed("#typing1", {
    strings: [
      '<span class="text-blue">print</span><span>&#40;</span><span class="text-green">"Hello World !!!"</span><span>&#41;</span>',
      '<span class="text-green">"Hello World !!!"</span>',
      '<span class="text-blue">console.log</span><span>&#40;</span><span class="text-green">"Hello World !!!"</span><span>&#41;</span>',
      '<span class="text-green">"Hello World !!!"</span>',
      '<span class="text-blue">printf</span><span>&#40;</span><span class="text-green">"Hello World !!!"</span><span>&#41;</span>&#59;',
      '<span class="text-blue">cout </span><span>&#8810;</span><span class="text-green"> "Hello World !!!"</span>&#59;',
      '<span class="text-green">"Hello World !!!"</span>',
      '<span class="text-blue">echo </span><span class="text-green">"Hello World !!!"</span>&#59;',
      '<span class="text-blue">System.out.println</span><span>&#40;</span><span class="text-green">"Hello World !!!"</span><span>&#41;</span>&#59;',
    ],
    typeSpeed: 50,
    backSpeed: 35,
    loop: true,
    loopCount: Infinity,
    shuffle: true,
  });
  var typed2 = new Typed("#typing2", {
    strings: [
      'I<span class="text-yellow">&#39;</span>m <span class="text-blue">A</span>tanu R<span class="text-green">oy</span>',
      'I<span class="text-yellow">&#39;</span>m <span class="text-blue">A</span>tanu',
      'I<span class="text-yellow">&#39;</span>m <span class="text-blue">A</span>tanu R<span class="text-green">oy</span>',
      'I<span class="text-yellow">&#39;</span>m',
      'I<span class="text-yellow">&#39;</span>m <span class="text-blue">A</span>tanu R<span class="text-green">oy</span>',
    ],
    typeSpeed: 150,
    backSpeed: 65,
    loop: true,
    loopCount: Infinity,
  });
  var typed3 = new Typed("#typing3", {
    strings: [
      '<span class="text-yellow">smart</span> engineer',
      '<span class="text-blue">modern</span> web developer',
      '<span class="text-green">creative</span> designer',
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
  });
} catch (error) {
  console.log("Error ocurred");
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
  console.log("Error ocurred");
  console.log(error);
}
