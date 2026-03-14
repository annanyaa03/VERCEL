function init() {
  // SVG pyramid is now static in HTML/CSS
}

function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;

    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(updateGlow);
  }

  updateGlow();
}

function setupDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      // Prevent clicking dropdown items from closing the menu immediately if they are links
      if (e.target.closest('.dropdown-menu')) return;

      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) other.classList.remove('show');
      });

      dropdown.classList.toggle('show');
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener('click', () => {
    dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
  });
}

function boot() {
  init();
  setupCursorGlow();
  setupDropdowns();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
