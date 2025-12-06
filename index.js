document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const slider = document.querySelector('.slider');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        if (index >= totalSlides) currentSlide = 0;
        if (index < 0) currentSlide = totalSlides - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    nextBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    prevBtn.addEventListener('click', function() {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
    
    slider.parentElement.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    slider.parentElement.addEventListener('mouseleave', function() {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });
        
       
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
        backToTopBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navItem = document.querySelector('.nav-item');
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            
            navItem.classList.toggle('active');
            
            document.body.style.overflow = navItem.classList.contains('active') ? 'hidden' : '';
        });
        
        const menuLinks = document.querySelectorAll('.name-menu, .nav-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                navItem.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navItem.contains(event.target) || burgerMenu.contains(event.target);
            
            if (!isClickInsideMenu && navItem.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                navItem.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                burgerMenu.classList.remove('active');
                navItem.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
