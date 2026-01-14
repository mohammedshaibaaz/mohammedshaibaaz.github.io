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
  const html = document.documentElement;
  
  // Get saved theme or default to 'dark'
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  // Theme toggle handler
  themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
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
  
  // Circular rotation: front card moves to back, others shift forward
  function rotateCardsCircular() {
    if (isPaused) return;
    
    cards.forEach(card => {
      const currentIndex = parseInt(card.getAttribute('data-index'));
      
      // Circular loop: 2 → 1 → 0 → 2
      // Front (2) moves to back (0), middle (1) to front (2), back (0) to middle (1)
      let newIndex;
      if (currentIndex === 2) {
        newIndex = 0; // Front card moves to back
      } else if (currentIndex === 1) {
        newIndex = 2; // Middle card moves to front
      } else {
        newIndex = 1; // Back card moves to middle
      }
      
      card.setAttribute('data-index', newIndex);
      
      // Update active state for front card
      if (newIndex === 2) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
  
  // Auto-advance every 6 seconds (calm, editorial timing)
  function startCarousel() {
    // Only run on desktop
    if (window.innerWidth <= 768) return;
    intervalId = setInterval(rotateCardsCircular, 6000);
  }
  
  // Pause on hover for user examination
  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  
  carousel.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  
  // Start carousel only on desktop
  if (window.innerWidth > 768) {
    startCarousel();
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
