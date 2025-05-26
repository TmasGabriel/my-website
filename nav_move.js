document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    if (scrollY > 70) {
    navbar.classList.add('side-navbar')
    }
    else {
    navbar.classList.remove('side-navbar')
    }
});