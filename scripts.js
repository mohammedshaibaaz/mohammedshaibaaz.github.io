/* ===============================================
   PREMIUM PORTFOLIO INTERACTIONS
   Calm, professional animations and smooth UX
   =============================================== */

// ============================================
// THEME TOGGLE
// Dark/Light mode switcher with localStorage persistence
// ============================================
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const html = document.documentElement;
  
  // Get saved theme or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  
  // Theme toggle handler (desktop + mobile)
  const toggleTheme = () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  themeToggle?.addEventListener('click', toggleTheme);
  mobileThemeToggle?.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
  initThemeToggle();
}

// ============================================
// KEYBOARD NAVIGATION & ACCESSIBILITY
// Improve keyboard accessibility and navigation
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Ensure all buttons and links are keyboard accessible
  const focusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  // Trap focus in mobile menu when open
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && document.body.classList.contains('nav-open')) {
        const focusableInMenu = mobileNav.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableInMenu.length === 0) return;
        
        const firstElement = focusableInMenu[0];
        const lastElement = focusableInMenu[focusableInMenu.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }
});

// ============================================
// ENHANCED CTA TRACKING & ANALYTICS
// Track user interactions with CTAs
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Track CTA clicks for insights
  const trackCTA = (ctaName) => {
    if (window.gtag) {
      gtag('event', 'cta_click', {
        'cta_name': ctaName,
        'page': window.location.href
      });
    }
  };
  
  // Add tracking to all CTAs
  document.querySelectorAll('a[href="#contact"], a[href^="mailto:"]').forEach(cta => {
    cta.addEventListener('click', (e) => {
      trackCTA(cta.textContent.trim());
    });
  });
});

// ============================================
// CIRCULAR CARD STACK CAROUSEL
// Premium Z-axis rotation with smooth depth transitions
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.stacked-carousel');
  const cards = document.querySelectorAll('.carousel-card');
  
  if (!carousel || cards.length === 0) return;
  
  let isPaused = false;
  let intervalId = null;
  
  // Dynamic carousel layout for N cards
  let frontIndex = null;

  function updateCarouselPositions(front) {
    const total = cards.length;
    if (total === 0) return;

    cards.forEach((card, idx) => {
      // compute circular relative position from front (0 is front)
      let rel = (idx - front + total) % total; // 0..total-1
      if (rel > total / 2) rel -= total; // choose shortest direction (negative left)
      const absPos = Math.abs(rel);

      // visual params (tweakable)
      const spacingX = 140; // px per step horizontally
      const spacingY = 20;  // px per step vertically
      const depthZ = 60;    // z offset per step
      const scaleStep = 0.09; // scale reduction per step

      const translateX = rel * spacingX;
      const translateY = absPos * spacingY;
      const translateZ = -absPos * depthZ;
      const scale = Math.max(0.6, 1 - scaleStep * absPos);
      const opacity = Math.max(0.25, 1 - 0.25 * absPos);
      const blur = Math.min(4, absPos * 1.5);
      const zIndex = 100 - absPos;

      card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) translateZ(${translateZ}px)`;
      card.style.zIndex = String(zIndex);
      card.style.opacity = String(opacity);
      card.style.filter = `brightness(${0.5 + (1 - absPos) * 0.5}) blur(${blur}px)`;

      if (rel === 0) card.classList.add('active'); else card.classList.remove('active');
    });
  }

  // Rotate front index forward by one and update positions
  function rotateCardsCircular() {
    if (isPaused) return;
    const total = cards.length;
    if (total === 0) return;
    frontIndex = (frontIndex + 1) % total;
    updateCarouselPositions(frontIndex);
  }

  // Auto-advance every 6 seconds (calm, editorial timing)
  function startCarousel() {
    if (window.innerWidth <= 768) return;
    // Respect reduced-motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (intervalId) return;
    intervalId = setInterval(rotateCardsCircular, 6000);
  }

  function stopCarousel() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  
  // Pause on hover for user examination
  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  
  carousel.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  
  // Initialize frontIndex from existing .active or default to last card
  const totalCards = cards.length;
  if (totalCards > 0) {
    const activeCard = Array.from(cards).findIndex(c => c.classList.contains('active'));
    frontIndex = activeCard >= 0 ? activeCard : Math.max(0, totalCards - 1);
    updateCarouselPositions(frontIndex);
  }

  // Start carousel only on desktop
  if (window.innerWidth > 768) {
    startCarousel();
  }

  /* --- Enhancements: resize handler, keyboard nav, touch swipe --- */
  // Debounced resize handler
  let resizeTimeout = null;
  function onResize() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // recompute layout
      updateCarouselPositions(frontIndex);
      // toggle auto-advance based on width
      if (window.innerWidth > 768) startCarousel(); else stopCarousel();
    }, 150);
  }
  window.addEventListener('resize', onResize);

  // Keyboard navigation (when carousel focused)
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      // rotate backward
      const total = cards.length; if (total === 0) return;
      frontIndex = (frontIndex - 1 + total) % total;
      updateCarouselPositions(frontIndex);
      // pause briefly
      stopCarousel();
      setTimeout(() => { if (window.innerWidth > 768) startCarousel(); }, 3000);
    } else if (e.key === 'ArrowRight') {
      rotateCardsCircular();
      stopCarousel();
      setTimeout(() => { if (window.innerWidth > 768) startCarousel(); }, 3000);
    }
  });

  // Pointer/touch swipe support
  let pointerDown = false; let startX = 0; let currentX = 0;
  carousel.addEventListener('pointerdown', (e) => {
    pointerDown = true; startX = e.clientX; currentX = startX; carousel.setPointerCapture(e.pointerId);
    // pause while interacting
    isPaused = true;
  });
  carousel.addEventListener('pointermove', (e) => { if (!pointerDown) return; currentX = e.clientX; });
  carousel.addEventListener('pointerup', (e) => {
    if (!pointerDown) return; pointerDown = false; isPaused = false; const dx = currentX - startX;
    const threshold = 40; // px
    if (dx > threshold) {
      // swipe right -> previous
      const total = cards.length; if (total === 0) return;
      frontIndex = (frontIndex - 1 + total) % total; updateCarouselPositions(frontIndex);
    } else if (dx < -threshold) {
      // swipe left -> next
      rotateCardsCircular();
    }
    // resume auto-advance after short delay
    setTimeout(() => { if (window.innerWidth > 768) startCarousel(); }, 1500);
  });
  carousel.addEventListener('pointercancel', () => { pointerDown = false; isPaused = false; });

  /* ------------------ Scroll-based Fade Animations ------------------ */
  function initScrollFadeAnimations() {
    // Respect reduced-motion users
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // make elements visible immediately
      document.querySelectorAll('.fade-in-on-scroll').forEach(el => el.classList.add('in-view'));
      return;
    }

    const selector = [
      'section', 'article', '.project-item', '.service-card', '.process-step', '.hero', '.hero-container', '.project-content', '.project-image', '.carousel-card', '.value-statement', '.services', '.projects', '.about', '.contact', '.footer'
    ].join(',');

    const elements = Array.from(document.querySelectorAll(selector)).filter(Boolean);
    // Add the helper class where it's not present already
    elements.forEach(el => {
      if (!el.classList.contains('fade-in-on-scroll')) el.classList.add('fade-in-on-scroll');
    });

    const ioOptions = { root: null, rootMargin: '0px 0px -12% 0px', threshold: [0, 0.15, 0.5] };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('in-view');
        } else {
          // allow fade-out when leaving viewport
          el.classList.remove('in-view');
        }
      });
    }, ioOptions);

    elements.forEach(el => observer.observe(el));
  }

  // Initialize animations after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollFadeAnimations);
  } else {
    initScrollFadeAnimations();
  }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      
      // Close mobile menu if open
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      if (document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        if (mobileMenuToggle) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      }
      
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileToggle) {
  // Open/close menu
  mobileToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open');
    mobileToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

if (mobileOverlay) {
  // Close when clicking overlay
  mobileOverlay.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
}

// Close menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    document.body.classList.remove('nav-open');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// ============================================
// SCROLL-TRIGGERED FADE-IN ANIMATIONS
// Calm animations trigger once on scroll
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Unobserve after animating once
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections that need fade-in animation
const animatedSections = document.querySelectorAll(
  '.value-statement, .project-item, .services-container, .process-container, .about-container, .final-cta-container'
);

animatedSections.forEach(section => {
  fadeInObserver.observe(section);
});

// ============================================
// MOBILE STICKY CTA VISIBILITY
// Show sticky CTA after scrolling past hero
// ============================================
const mobileStickyCta = document.querySelector('.mobile-sticky-cta');
const heroSection = document.querySelector('.hero');

if (mobileStickyCta && heroSection && window.innerWidth <= 768) {
  const stickyCtaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          mobileStickyCta.classList.add('visible');
        } else {
          mobileStickyCta.classList.remove('visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  stickyCtaObserver.observe(heroSection);
}

// ============================================
// NAVIGATION BACKGROUND ON SCROLL
// Subtle enhancement for nav bar
// ============================================
const mainNav = document.querySelector('.main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled
  if (currentScroll > 50) {
    mainNav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
  } else {
    mainNav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
}, { passive: true });

// ============================================
// PROJECT IMAGE HOVER ENHANCEMENT
// Subtle scale effect on hover
// ============================================
const projectImages = document.querySelectorAll('.project-image-link');

projectImages.forEach(imageLink => {
  const img = imageLink.querySelector('.project-image img');
  
  if (img) {
    imageLink.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
    
    imageLink.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  }
});

// ============================================
// IN-VIEW HIGHLIGHT FOR PROJECTS (lights up at ~50%)
const projectInviewObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.project-item').forEach(item => projectInviewObserver.observe(item));

// PROCESS CONNECTOR DRAW when visible
const processContainer = document.querySelector('.process-container');
if (processContainer) {
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        processContainer.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });
  processObserver.observe(processContainer);
}

// PERFORMANCE: LAZY LOAD IMAGES
// Only load images as they come into view
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // If image has data-src, load it
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        
        imageObserver.unobserve(img);
      }
    });
  });
  
  // Observe all images with loading="lazy"
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// PREVENT LAYOUT SHIFT ON LOAD
// Ensure smooth initial render
// ============================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ============================================
// BUTTON INTERACTIONS
// Keep interactions minimal (no ripple) per motion rules
// ============================================
// Subtle pressed feedback via CSS class (optional)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mousedown', () => btn.classList.add('pressed'));
  btn.addEventListener('mouseup', () => btn.classList.remove('pressed'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('pressed'));
});

// ============================================
// ACCESSIBILITY: FOCUS VISIBLE
// Better keyboard navigation
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
  body.keyboard-nav *:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;
document.head.appendChild(focusStyle);

// ============================================
// PERFORMANCE MONITORING (OPTIONAL)
// Log performance metrics in console
// ============================================
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
      console.log('DOM Content Loaded:', Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart), 'ms');
    }
  }
});

// ============================================
// PREVENT FLASH OF UNSTYLED CONTENT
// Fade in body when ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// ============================================
// SECTION THRESHOLD LINE ANIMATION
// Animate width left→right on scroll entry (once, slow, calm)
document.addEventListener('DOMContentLoaded', () => {
  const thresholdLines = document.querySelectorAll('.section-threshold-line');
  if (!thresholdLines.length) return;

  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Animate once only
        }
      });
    },
    {
      root: null,
      threshold: 0.12
    }
  );

  thresholdLines.forEach(line => {
    observer.observe(line);
  });
});

// ============================================
// PROJECT SEPARATOR LINE ANIMATION
// Animate width left→right on scroll entry (once, slow, calm)
document.addEventListener('DOMContentLoaded', () => {
  const projectSeparators = document.querySelectorAll('.project-separator-line');
  if (!projectSeparators.length) return;

  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Animate once only
        }
      });
    },
    {
      root: null,
      threshold: 0.12
    }
  );

  projectSeparators.forEach(line => {
    observer.observe(line);
  });
});

// ============================================
// APPROACH TIMELINE LINE ANIMATION
// Reveal vertical line top→bottom as steps appear (once, slow, calm)
document.addEventListener('DOMContentLoaded', () => {
  const timelineLine = document.querySelector('.process-timeline-line');
  if (!timelineLine) return;

  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Animate once only
        }
      });
    },
    {
      root: null,
      threshold: 0.18
    }
  );

  observer.observe(timelineLine);
});

// ============================================
// PROJECTS SCROLL PROGRESS LINE
// Subtle progress bar tied to scroll position in Projects section
document.addEventListener('DOMContentLoaded', () => {
  const progressLine = document.querySelector('.projects-scroll-progress');
  const projectsSection = document.querySelector('.projects');
  if (!progressLine || !projectsSection) return;

  function updateProgress() {
    const rect = projectsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = projectsSection.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const sectionTop = projectsSection.offsetTop;
    const sectionBottom = sectionTop + sectionHeight;
    const progress = Math.min(
      1,
      Math.max(0, (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight))
    );
    progressLine.style.width = (progress * 100) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
});
