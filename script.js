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
            "stack-lang": "Linguagens",
            "stack-backend": "Back-End",
            "stack-db": "Banco de Dados",
            "stack-devops": "DevOps & IA",
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
            "stack-lang": "Languages",
            "stack-backend": "Back-End",
            "stack-db": "Databases",
            "stack-devops": "DevOps & AI",
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
});
