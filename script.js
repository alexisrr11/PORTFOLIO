const btnMenu = document.getElementById("btn-menu");
const contendorMenu = document.getElementById("contendor-menu");
const btnVerMas = document.getElementById("btn-ver-mas");
const contenedorVerMas = document.getElementById("ver-mas");

btnMenu.addEventListener("click", () => {
    contendorMenu.classList.toggle("hidden");
});

btnVerMas.addEventListener("click", () => {
    contenedorVerMas.classList.toggle("hidden");
    btnVerMas.textContent = contenedorVerMas.classList.contains("hidden") ? "Ver más" : "Ver menos";
});

document.addEventListener('DOMContentLoaded', function () {
    // Manejar el envío del formulario de contacto
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Gracias ${name}, tu mensaje ha sido enviado. Te contactaré pronto.`);
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Smooth scroll para navegación y manejo de enlace activo
    const navLinks = document.querySelectorAll('nav a');

    function highlightLink(hash) {
        navLinks.forEach(l => {
            l.classList.remove('text-blue-600', 'font-semibold');
            if (l.getAttribute('href') === hash) {
                l.classList.add('text-blue-600', 'font-semibold');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            //Actualizar el hash sin causar salto
            history.pushState(null, '', href);
            highlightLink(href);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    const currentHash = window.location.hash || '#acerca';
    highlightLink(currentHash);

    // Actualizar enlace activo al hacer scroll
    const sections = Array.from(navLinks).map(l => {
        const id = l.getAttribute('href').substring(1);
        return document.getElementById(id);
    });

    function onScroll() {
        let current = '#acerca';
        for (const sec of sections) {
            const rect = sec.getBoundingClientRect();
            // cuando el centro de la ventana está dentro de la sección
            if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                current = '#' + sec.id;
                break;
            }
        }
        if (current !== window.location.hash) {
            history.replaceState(null, '', current);
            highlightLink(current);
        }
    }

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});