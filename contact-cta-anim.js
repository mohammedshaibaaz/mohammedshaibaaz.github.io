// Contact section scroll-triggered animation
(function() {
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 80 &&
      rect.bottom > 80
    );
  }
  function onScroll() {
    var card = document.querySelector('.final-cta-card');
    if (!card) return;
    if (isInViewport(card)) {
      card.classList.add('in-view');
    } else {
      card.classList.remove('in-view');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
})();
