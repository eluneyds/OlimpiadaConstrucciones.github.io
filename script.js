document.addEventListener('DOMContentLoaded', () => {
    // Código para el carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselPrevBtn = document.querySelector('.carousel-prev');
    const carouselNextBtn = document.querySelector('.carousel-next');

    let currentSlide = 0;
    let intervalId; // Para el autoplay

    // Función para mostrar un slide específico
    function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Función para el siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    // Función para el slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(currentSlide);
    }

    // Iniciar el carrusel automático
    function startAutoplay() {
        intervalId = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    }

    // Detener el carrusel automático
    function stopAutoplay() {
        clearInterval(intervalId);
    }

    // Eventos para los botones de navegación
    if (carouselNextBtn && carouselPrevBtn) {
        carouselNextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay(); // Reiniciar el autoplay después de la interacción manual
        });

        carouselPrevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            startAutoplay(); // Reiniciar el autoplay después de la interacción manual
        });
    }

    // Iniciar el carrusel al cargar la página
    startAutoplay();


    // Código para el acordeón (sin cambios, solo movido al script.js)
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            const parentItem = button.parentNode;

            // Cierra todos los demás acordeones
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== parentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Abre o cierra el acordeón actual
            parentItem.classList.toggle('active');
            if (parentItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});