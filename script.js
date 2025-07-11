document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura para el logo
    const logo = document.getElementById('logo');
    const logoText = 'AnimeWiki';
    let i = 0;
    
    logo.innerHTML = '';
    
    function typeWriter() {
        if (i < logoText.length) {
            if (i === 5) {
                logo.innerHTML += '<span>' + logoText.charAt(i) + '</span>';
            } else {
                logo.innerHTML += logoText.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
    
    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto parallax para la sección hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Animación de las tarjetas de anime al aparecer
    const animeCards = document.querySelectorAll('.anime-card');
    
    function checkScroll() {
        animeCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializar las tarjetas con opacidad 0
    animeCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Ejecutar al cargar la página
    
    // Efecto hover para las tarjetas de anime
    animeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const animeType = this.getAttribute('data-anime');
            const ratingElement = this.querySelector('.anime-rating');
            
            if (ratingElement) {
                ratingElement.style.transform = 'scale(1.1)';
                ratingElement.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const ratingElement = this.querySelector('.anime-rating');
            
            if (ratingElement) {
                ratingElement.style.transform = 'scale(1)';
            }
        });
    });
    
    // Formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('¡Gracias por suscribirte a nuestro newsletter!');
                emailInput.value = '';
            } else {
                alert('Por favor ingresa tu correo electrónico');
            }
        });
    }
    
    // Cambiar color del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--dark-color)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Botón de ir arriba
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Estilos para el botón de ir arriba
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '30px';
    scrollToTopBtn.style.right = '30px';
    scrollToTopBtn.style.width = '50px';
    scrollToTopBtn.style.height = '50px';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.backgroundColor = 'var(--primary-color)';
    scrollToTopBtn.style.color = 'white';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.display = 'flex';
    scrollToTopBtn.style.alignItems = 'center';
    scrollToTopBtn.style.justifyContent = 'center';
    scrollToTopBtn.style.fontSize = '1.2rem';
    scrollToTopBtn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    scrollToTopBtn.style.transition = 'all 0.3s ease';
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.visibility = 'hidden';
    scrollToTopBtn.style.zIndex = '999';
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });
});