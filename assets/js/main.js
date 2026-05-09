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

    // 3. Forzar descarga real de archivos (evita que el navegador solo muestre la imagen)
    const downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault(); // Evitamos la navegación por defecto
            
            const url = link.getAttribute('href');
            const fileName = link.getAttribute('download');
            
            try {
                // Obtenemos el archivo como un Blob
                const response = await fetch(url);
                const blob = await response.blob();
                
                // Creamos una URL temporal para el Blob
                const blobUrl = window.URL.createObjectURL(blob);
                
                // Creamos un enlace temporal y forzamos el clic
                const tempLink = document.createElement('a');
                tempLink.style.display = 'none';
                tempLink.href = blobUrl;
                tempLink.download = fileName;
                
                document.body.appendChild(tempLink);
                tempLink.click();
                
                // Limpiamos
                window.URL.revokeObjectURL(blobUrl);
                document.body.removeChild(tempLink);
            } catch (error) {
                console.error('Error al forzar la descarga:', error);
                // Si algo falla (ej. bloqueos por CORS en modo archivo local), el fallback es abrirlo normalmente
                window.open(url, '_blank');
            }
        });
    });

    // 4. Año dinámico en el footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
