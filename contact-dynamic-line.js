// Animate the dynamic horizon line in the contact section
(function() {
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 80 &&
      rect.bottom > 80
    );
  }
  function onScroll() {
    var section = document.getElementById('contact');
    if (!section) return;
    if (isInViewport(section)) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
})();
