// Scroll-Based Animations
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const projectCards = document.querySelectorAll('.project-card');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });

  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.classList.add('visible');
    }
  });
});
