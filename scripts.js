

const sideNav = document.getElementById("sideNav");
const heroSection = document.getElementById("home");

if (sideNav && heroSection) {
  const sideNavObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sideNav.classList.remove("show");
        } else {
          sideNav.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  sideNavObserver.observe(heroSection);
}



document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".selected-works, .services, .about, .contact"
  );

  if (!sections.length) return;

  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // reveal once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px"
    }
  );

  sections.forEach(section => fadeObserver.observe(section));
});

/* ===============================
   SMOOTH SCROLL (ANCHOR LINKS)
   =============================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* ===============================
   HERO REVEAL (RUNS ONCE)
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const duration = 1400;
  let start = null;

  function reveal(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out

    hero.style.setProperty("--wipe-x", `${eased * 100}%`);

    if (progress < 1) {
      requestAnimationFrame(reveal);
    }
  }

  requestAnimationFrame(reveal);
});

/* ===============================
   MOBILE NAV (SAFE & NON-BLOCKING)
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".mobile-nav-trigger");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const drawer = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  if (!trigger || !overlay || !drawer) return;

  let startY = null;

  function openNav() {
    document.body.classList.add("nav-open");
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
  }

  trigger.addEventListener("click", openNav);
  overlay.addEventListener("click", closeNav);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeNav);
  });

  /* Swipe down to close */
  document.addEventListener("touchstart", e => {
    if (!document.body.classList.contains("nav-open")) return;
    startY = e.touches[0].clientY;
  });

  document.addEventListener("touchmove", e => {
    if (!startY) return;
    const deltaY = e.touches[0].clientY - startY;

    if (deltaY > 80) {
      closeNav();
      startY = null;
    }
  });
});

