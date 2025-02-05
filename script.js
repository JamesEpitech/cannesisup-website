document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav ul');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function () {
            navMenu.classList.toggle('visible');
            console.log('Burger menu clicked, menu visibility:', navMenu.classList.contains('visible') ? 'Visible' : 'Hidden');
        });
    }

    // Ajout de la gestion du lien actif
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});