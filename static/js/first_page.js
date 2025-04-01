document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");
  let lastScrollY = window.scrollY;
  let isScrollingUp = false;

  window.addEventListener("scroll", function () {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Прокрутка вниз → показываем header
      header.classList.add("fixed");
      header.classList.remove("hidden");
      isScrollingUp = false;
    } else {
      // Прокрутка вверх → скрываем header
      if (!isScrollingUp) {
        header.classList.add("hidden");
        isScrollingUp = true;
      }
    }

    // Если в самом верху страницы → убираем fixed и возвращаем header
    if (currentScrollY === 0) {
      header.classList.remove("fixed");
      header.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!burger || !mobileNav) {
    console.error("Элементы .burger-menu или .mobile-nav не найдены!");
    return;
  }

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // Закрываем меню при клике на ссылку
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", function () {
      burger.classList.remove("active");
      mobileNav.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn").addEventListener("click", function (event) {
    event.preventDefault(); // Отменяем стандартный переход

    let target = document.querySelector("#telegram-bot-section");
    let highlightText = document.querySelector("#telegram-bot-section p");

    if (target) {
      // Учитываем высоту фиксированного меню (если оно есть)
      let headerHeight = document.querySelector("header")?.offsetHeight || 0;

      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          20,
        behavior: "smooth",
      });

      setTimeout(() => {
        highlightText.classList.add("highlight");
        setTimeout(() => highlightText.classList.remove("highlight"), 2000);
      }, 500);
    }
  });
  document.getElementById("btn_id").addEventListener("click", function (event) {
    event.preventDefault(); // Отменяем стандартный переход

    let target = document.querySelector("#telegram-bot-section");
    let highlightText = document.querySelector("#telegram-bot-section p");

    if (target) {
      // Учитываем высоту фиксированного меню (если оно есть)
      let headerHeight = document.querySelector("header")?.offsetHeight || 0;

      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          20,
        behavior: "smooth",
      });

      setTimeout(() => {
        highlightText.classList.add("highlight");
        setTimeout(() => highlightText.classList.remove("highlight"), 2000);
      }, 500);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll(".fade-in");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Убираем класс, если элемент вышел из зоны видимости
        }
      });
    },
    { threshold: 0.3 } // 30% элемента в зоне видимости - запускаем анимацию
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in-2").forEach((section) => {
  gsap.fromTo(
    section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 85%", // Когда 85% экрана достигнет элемента, запускаем анимацию
        toggleActions: "play reverse play reverse", // Повторная анимация при скролле вверх/вниз
      },
    }
  );
});
