// Mobile Menu Toggle Funktionalität
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');
    
    // Toggle Menu Funktion
    function toggleMenu() {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-open');
    }
    
    // Event Listener für Burger Click
    if (burger) {
        burger.addEventListener('click', toggleMenu);
    }
    
    // Schließe Menü bei Link-Click (mobile)
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });
    
    // Schließe Menü bei Außenklick
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && navLinks.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
    
    // Schließe Menü bei Escape-Taste
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
});
