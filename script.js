import {translations} from "./idiomas/i18n.js";

const btnMenu = document.getElementById("btn-menu");
const contendorMenu = document.getElementById("contendor-menu");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const modalProyectos = document.getElementById("modal-proyectos");
const btnCerrarDatos = document.getElementById("btn-cerrar-datos");
const modalDatos = document.getElementById("modal-datos");
const btnAbrirDatos = document.getElementById("btn-abrir-datos");
const btnIdiomasFull = document.getElementById("btn-idiomas-full");
const btnIdiomaMd = document.getElementById("btn-idiomas-md");
const modalIdiomasFull = document.getElementById("modal-idiomas-full");
const modalIdiomasMd = document.getElementById("modal-idiomas-md");

function abrirCerrar(btn, contenedor) {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        contenedor.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
        if (!contenedor.classList.contains("hidden")) {
            if (!contenedor.contains(e.target) && e.target !== btn) {
                contenedor.classList.add("hidden");
            }
        }
    });
}

abrirCerrar(btnMenu, contendorMenu);
abrirCerrar(btnCerrarModal, modalProyectos);
abrirCerrar(btnAbrirDatos, modalDatos);
abrirCerrar(btnCerrarDatos, modalDatos);
abrirCerrar(btnIdiomasFull, modalIdiomasFull);
abrirCerrar(btnIdiomaMd, modalIdiomasMd);

document.addEventListener('DOMContentLoaded', function () {

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

// Al hacer click, scrollea hasta el final del viewport
document.getElementById("scrollDownBtn").addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

// Botón para inicializar envío de correo y botón para copiar al portapapeles
const email = document.getElementById("emailText").innerText;

document.getElementById("sendBtn").addEventListener("click", () => {
    window.location.href = `mailto:${email}`;
});

document.getElementById("copyBtn").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(email);
        const currentLang = document.documentElement.lang;
        alert(translations[currentLang]["contacts.copy"]);
    } catch (err) {
        console.error("Error al copiar: ", err);
    }
});



