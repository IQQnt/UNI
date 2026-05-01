/**
 * main.js - Lógica central para el sitio de Prevención de Phishing
 * Proyecto Comunitario El Bosque, Cumaná.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Botón "Volver Arriba"
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
                backToTopBtn.classList.add('flex');
            } else {
                backToTopBtn.classList.add('hidden');
                backToTopBtn.classList.remove('flex');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Simulación de descargas
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const fileName = btn.getAttribute('data-file') || 'archivo';
            console.log(`Simulando descarga de: ${fileName}`);
            alert(`Preparando descarga de: ${fileName}\n(En un sitio real, aquí comenzaría la descarga del archivo PDF o imagen).`);
        });
    });

    // 4. Año dinámico en el footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
