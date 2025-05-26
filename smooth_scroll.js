document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    });
});