const translations = {
      pt: {
            "menu-home": "home",
            "menu-projects": "projetos",
            "menu-solutions": "soluções",
            "menu-stack": "stack",
            "menu-contact": "contato",
            "menu-toggle": "menu",
            "menu-close": "close",
            "hero-subline": "Desenvolvedor Back-End, Node.js, TypeScript.",
            "title-recent": "Alguns trabalhos recentes.",
            "title-stack": "Minha Stack de Tecnologia.",
            "stack-backend": "Back-End",
            "stack-frontend": "Front-End",
            "stack-devops": "DevOps & Ferramentas",
            "title-solutions": "Soluções Digitais Sob Medida.",
            "desc-solutions": "Desenvolvo Landing Pages, Sistemas de Agendamento, Catálogos, ChatBots e muito mais. Projetos criados sob medida para resolver a dor do seu negócio e atrair mais clientes.",
            "btn-whatsapp": "Fazer um orçamento no WhatsApp",
            "footer-text": "Tem algum projeto em mente ou quer bater um papo? Me chame.",
            "footer-github": "github",
            "footer-social": "redes",
            "footer-contact": "contato",
            "project1": "WhisperOps: SaaS WhatsApp Analytics com IA.",
            "project2": "ChatBot IA: Assistente WhatsApp com Groq.",
            "project3": "API RESTful: TypeScript, Prisma & Docker.",
            "project4": "MVP Agenda: Sistema inteligente de agendamento.",
            "project5": "Marks Advocacia: Landing Page para escritório."
      },
      en: {
            "menu-home": "home",
            "menu-projects": "projects",
            "menu-solutions": "solutions",
            "menu-stack": "stack",
            "menu-contact": "contact",
            "menu-toggle": "menu",
            "menu-close": "close",
            "hero-subline": "Back-End Developer, Node.js, TypeScript.",
            "title-recent": "Some recent works.",
            "title-stack": "My Technology Stack.",
            "stack-backend": "Back-End",
            "stack-frontend": "Front-End",
            "stack-devops": "DevOps & Tools",
            "title-solutions": "Custom Digital Solutions.",
            "desc-solutions": "I develop Landing Pages, Scheduling Systems, Catalogs, ChatBots and more. Tailor-made projects to solve your business pain points and attract more clients.",
            "btn-whatsapp": "Get a quote on WhatsApp",
            "footer-text": "Have a project in mind or want to chat? Hit me up.",
            "footer-github": "github",
            "footer-social": "social",
            "footer-contact": "contact",
            "project1": "WhisperOps: WhatsApp Analytics SaaS with AI.",
            "project2": "AI ChatBot: WhatsApp Assistant with Groq.",
            "project3": "RESTful API: TypeScript, Prisma & Docker.",
            "project4": "MVP Agenda: Smart scheduling system.",
            "project5": "Marks Advocacia: Law office landing page."
      }
};

let currentLang = localStorage.getItem("lang") || "pt";
let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
      const htmlRoot = document.getElementById("html-root");
      const themeBtn = document.getElementById("themeToggle");
      const themeBtnMobile = document.getElementById("themeToggleMobile");

      if (theme === "light") {
            htmlRoot.setAttribute("data-theme", "light");
            if (themeBtn) themeBtn.textContent = "🌙";
            if (themeBtnMobile) themeBtnMobile.textContent = "🌙";
      } else {
            htmlRoot.removeAttribute("data-theme");
            if (themeBtn) themeBtn.textContent = "☀️";
            if (themeBtnMobile) themeBtnMobile.textContent = "☀️";
      }
}

function applyLanguage(lang) {
      document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                  el.textContent = translations[lang][key];
            }
      });
      
      document.querySelectorAll("[data-project-content]").forEach((el, index) => {
            const key = `project${index + 1}`;
            if (translations[lang][key]) {
                  el.setAttribute("data-project-content", translations[lang][key]);
            }
      });

      const toggleBtn = document.getElementById("langToggle");
      if (toggleBtn) {
            toggleBtn.textContent = lang === "pt" ? "EN" : "PT";
      }

      const toggleBtnMobile = document.getElementById("langToggleMobile");
      if (toggleBtnMobile) {
            toggleBtnMobile.textContent = lang === "pt" ? "EN" : "PT";
      }
      
      const htmlRoot = document.getElementById("html-root");
      if (htmlRoot) {
            htmlRoot.lang = lang === "pt" ? "pt-BR" : "en";
      }
}

document.addEventListener("DOMContentLoaded", () => {
      // Initialize language
      applyLanguage(currentLang);
      
      const toggleBtn = document.getElementById("langToggle");
      if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                  currentLang = currentLang === "pt" ? "en" : "pt";
                  localStorage.setItem("lang", currentLang);
                  applyLanguage(currentLang);
            });
      }

      const toggleBtnMobile = document.getElementById("langToggleMobile");
      if (toggleBtnMobile) {
            toggleBtnMobile.addEventListener("click", () => {
                  currentLang = currentLang === "pt" ? "en" : "pt";
                  localStorage.setItem("lang", currentLang);
                  applyLanguage(currentLang);
            });
      }

      // Initialize theme
      applyTheme(currentTheme);

      const themeBtn = document.getElementById("themeToggle");
      if (themeBtn) {
            themeBtn.addEventListener("click", () => {
                  currentTheme = currentTheme === "dark" ? "light" : "dark";
                  localStorage.setItem("theme", currentTheme);
                  applyTheme(currentTheme);
            });
      }

      const themeBtnMobile = document.getElementById("themeToggleMobile");
      if (themeBtnMobile) {
            themeBtnMobile.addEventListener("click", () => {
                  currentTheme = currentTheme === "dark" ? "light" : "dark";
                  localStorage.setItem("theme", currentTheme);
                  applyTheme(currentTheme);
            });
      }
});

$(document).ready(function () {
      // navigation starts here
      $("#toggle").click(function () {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $("#resize ul li a").click(function () {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });

      $(".close-btn").click(function () {
            $(this).toggleClass('on');
            $("#resize").toggleClass("active");
      });
      // navigation ends here

      // nav animation
      TweenMax.from("#brand", 1, {
            delay: 0.4,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom("#menu li a", 1, {
            delay: 0.4,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1);
      // nav animation ends

      // Initialize WOW.js
      new WOW().init();

      // Scroll Animation (Percent indicator following mouse)
      var counter = document.querySelector(".percent");

      // Only initialize if counter exists (hidden on mobile)
      if (counter && window.innerWidth > 768) {
            TweenLite.set(counter, {
                  xPercent: -5,
                  yPercent: -5,
            });

            window.addEventListener("mousemove", moveCounter);

            function moveCounter(e) {
                  TweenLite.to(counter, 0.5, {
                        x: e.clientX,
                        y: e.clientY,
                  });
            }

            function progress() {
                  var windowScrollTop = $(window).scrollTop();
                  var docHeight = $(document).height();
                  var windowHeight = $(window).height();
                  var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

                  var $bgColor = progress > 99 ? "#fff" : "#fff";
                  var $textColor = progress > 99 ? "#fff" : "#333";

                  $("h2")
                        .text(Math.round(progress) + "%")
                        .css({ color: $textColor });

                  $(".fill")
                        .height(progress + "%")
                        .css({ backgroundColor: $bgColor });
            }

            progress();
            $(document).on("scroll", progress);
      }

      // Initialize Particles.js
      if (window.particlesJS) {
            particlesJS("particles-js", {
                  "particles": {
                        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                        "color": { "value": "#999999" },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.5, "random": false },
                        "size": { "value": 3, "random": true },
                        "line_linked": { "enable": true, "distance": 150, "color": "#999999", "opacity": 0.4, "width": 1 },
                        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                  },
                  "interactivity": {
                        "detect_on": "canvas",
                        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                        "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
                  },
                  "retina_detect": true
            });
      }

      // Magnetic Custom Cursor
      const cursor = document.querySelector(".cursor");
      if (cursor && window.innerWidth > 768) {
            document.addEventListener("mousemove", (e) => {
                  cursor.style.left = e.clientX + "px";
                  cursor.style.top = e.clientY + "px";
            });

            const interactables = document.querySelectorAll("a, button, .project, .info li, .nav__lang");
            interactables.forEach(el => {
                  el.addEventListener("mouseenter", () => {
                        cursor.classList.add("hovered");
                  });
                  el.addEventListener("mouseleave", () => {
                        cursor.classList.remove("hovered");
                  });
            });
      }
});
