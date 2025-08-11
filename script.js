let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Oculta todas las diapositivas
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Muestra la diapositiva actual
    slides[slideIndex - 1].style.display = "block";

    // Cambia cada 4 segundos
    setTimeout(showSlides, 4000);
}

// Inicia el slider al cargar la página
document.addEventListener("DOMContentLoaded", showSlides);


// =======================
// Animación de aparición al hacer scroll
// =======================
function revealOnScroll() {
    let reveals = document.querySelectorAll(".content-section, .hero-text, .service-card, .about-section, .gallery-section");
    
    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// =======================
// Botón "Volver arriba"
// =======================
let backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});