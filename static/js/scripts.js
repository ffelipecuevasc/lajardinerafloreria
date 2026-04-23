// Archivo: ./static/js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconElement = document.querySelector('#theme-toggle span');

    // Función para cambiar el tema y el ícono
    function switchTheme() {
        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            iconElement.textContent = 'light_mode';
        } else {
            iconElement.textContent = 'dark_mode';
        }
    }

    // Event Listener con soporte para View Transitions API
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Fallback para navegadores que no soportan la API
            if (!document.startViewTransition) {
                switchTheme();
                return;
            }

            // Ejecuta la transición fluida
            document.startViewTransition(switchTheme);
        });
    }
});