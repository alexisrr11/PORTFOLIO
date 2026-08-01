import { translations } from "./idiomas/i18n.js";

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

// Elementos de la sección Formación
const btnLeerCursoReact = document.getElementById("btn-leer-curso-react");
const contenidoCursoReact = document.getElementById(
    "contenido-curso-react"
);

const btnLeerAutodidacta = document.getElementById(
    "btn-leer-autodidacta"
);

const contenidoAutodidacta = document.getElementById(
    "contenido-autodidacta"
);

const btnVerDiplomaReact = document.getElementById(
    "btn-ver-diploma-react"
);

/**
 * Abre y cierra un contenedor.
 */
function abrirCerrar(btn, contenedor) {
    if (!btn || !contenedor) {
        return;
    }

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        contenedor.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
        if (!contenedor.classList.contains("hidden")) {
            const clickDentroDelContenedor = contenedor.contains(e.target);
            const clickEnElBoton = btn.contains(e.target);

            if (!clickDentroDelContenedor && !clickEnElBoton) {
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

/*
document.getElementById("btn-mas-proyectos").addEventListener("click", () => {
    document.getElementById("mas-proyectos").classList.toggle("hidden");
    document.getElementById("arrow-rotate").classList.toggle("rotate-180");
});
*/

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll para navegación y manejo de enlace activo
    const navLinks = document.querySelectorAll("nav a");

    function highlightLink(hash) {
        navLinks.forEach((link) => {
            link.classList.remove("text-blue-600", "font-semibold");

            if (link.getAttribute("href") === hash) {
                link.classList.add("text-blue-600", "font-semibold");
            }
        });
    }

    const currentHash = window.location.hash || "#acerca";
    highlightLink(currentHash);

    // Actualizar enlace activo al hacer scroll
    const sections = Array.from(navLinks)
        .map((link) => {
            const href = link.getAttribute("href");

            if (!href || !href.startsWith("#")) {
                return null;
            }

            const id = href.substring(1);

            return document.getElementById(id);
        })
        .filter(Boolean);

    function onScroll() {
        let current = "#acerca";

        for (const section of sections) {
            const rect = section.getBoundingClientRect();

            // Cuando el centro de la ventana está dentro de la sección
            if (
                rect.top <= window.innerHeight / 2 &&
                rect.bottom > window.innerHeight / 2
            ) {
                current = `#${section.id}`;
                break;
            }
        }

        if (current !== window.location.hash) {
            history.replaceState(null, "", current);
            highlightLink(current);
        }
    }

    let ticking = false;

    window.addEventListener("scroll", function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                onScroll();
                ticking = false;
            });

            ticking = true;
        }
    });
});

// Al hacer clic, scrollea hasta el final del viewport
const scrollDownBtn = document.getElementById("scrollDownBtn");

if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
        });
    });
}

// Botón para inicializar envío de correo y botón para copiar
const emailText = document.getElementById("emailText");
const sendBtn = document.getElementById("sendBtn");
const copyBtn = document.getElementById("copyBtn");

if (emailText && sendBtn && copyBtn) {
    const email = emailText.innerText.trim();

    sendBtn.addEventListener("click", () => {
        window.location.href = `mailto:${email}`;
    });

    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(email);

            const currentLang =
                document.documentElement.lang || "es";

            const copyMessage =
                translations[currentLang]?.["contacts.copy"] ||
                translations.es["contacts.copy"];

            alert(copyMessage);
        } catch (err) {
            console.error("Error al copiar: ", err);
        }
    });
}

/* =====================================================
   SECCIÓN FORMACIÓN
===================================================== */

/**
 * Obtiene una traducción utilizando el idioma actual.
 */
function obtenerTraduccion(clave, valorAlternativo = "") {
    const currentLang = document.documentElement.lang || "es";

    return (
        translations[currentLang]?.[clave] ||
        translations.es?.[clave] ||
        valorAlternativo
    );
}

/**
 * Configura un botón Leer más / Leer menos.
 */
function configurarBotonLeerMas(btn, contenedor) {
    if (!btn || !contenedor) {
        return;
    }

    const actualizarBoton = () => {
        const estaOculto = contenedor.classList.contains("hidden");

        btn.textContent = estaOculto
            ? obtenerTraduccion(
                  "education.readMore",
                  "Leer más"
              )
            : obtenerTraduccion(
                  "education.readLess",
                  "Leer menos"
              );

        btn.setAttribute(
            "aria-expanded",
            String(!estaOculto)
        );
    };

    btn.addEventListener("click", (event) => {
        event.stopPropagation();

        contenedor.classList.toggle("hidden");
        actualizarBoton();
    });

    actualizarBoton();

    /*
     * Permite actualizar el texto cuando tu sistema
     * de idiomas dispare este evento personalizado.
     */
    document.addEventListener("languageChanged", actualizarBoton);
}

configurarBotonLeerMas(
    btnLeerCursoReact,
    contenidoCursoReact
);

configurarBotonLeerMas(
    btnLeerAutodidacta,
    contenidoAutodidacta
);

/**
 * Crea dinámicamente el modal del diploma.
 */
function crearModalDiploma() {
    const modalExistente = document.getElementById(
        "modal-diploma-react"
    );

    if (modalExistente) {
        return {
            modal: modalExistente,
            imagen: modalExistente.querySelector(
                "#imagen-diploma-react"
            ),
            btnCerrar: modalExistente.querySelector(
                "#btn-cerrar-diploma-react"
            ),
            cargando: modalExistente.querySelector(
                "#cargando-diploma-react"
            ),
            error: modalExistente.querySelector(
                "#error-diploma-react"
            ),
        };
    }

    const modal = document.createElement("div");

    modal.id = "modal-diploma-react";

    modal.className = [
        "hidden",
        "fixed",
        "inset-0",
        "z-[100]",
        "bg-black/90",
        "backdrop-blur-sm",
        "p-4",
        "sm:p-8",
        "overflow-y-auto",
    ].join(" ");

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute(
        "aria-label",
        "Diploma del curso de React"
    );

    modal.innerHTML = `
        <div
            id="contenedor-diploma-react"
            class="relative flex min-h-full items-center justify-center"
        >
            <button
                id="btn-cerrar-diploma-react"
                type="button"
                class="
                    fixed top-4 right-4 z-[110]
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-gray-800
                    text-3xl text-white
                    shadow-lg
                    transition-colors
                    hover:bg-red-600
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                "
                aria-label="Cerrar diploma"
            >
                &times;
            </button>

            <div
                id="cargando-diploma-react"
                class="text-center text-gray-200"
            >
                <i class="bx bx-loader-alt bx-spin text-5xl"></i>

                <p
                    data-i18n="education.diploma.loading"
                    class="mt-3"
                >
                    Cargando diploma...
                </p>
            </div>

            <p
                id="error-diploma-react"
                data-i18n="education.diploma.error"
                class="hidden text-center text-red-300"
            >
                No se pudo cargar la imagen del diploma.
            </p>

            <img
                id="imagen-diploma-react"
                alt="Diploma del curso de desarrollo de aplicaciones con React"
                class="
                    hidden
                    max-h-[90vh]
                    max-w-full
                    rounded-lg
                    object-contain
                    shadow-2xl
                "
            >
        </div>
    `;

    document.body.appendChild(modal);

    return {
        modal,
        imagen: modal.querySelector(
            "#imagen-diploma-react"
        ),
        btnCerrar: modal.querySelector(
            "#btn-cerrar-diploma-react"
        ),
        cargando: modal.querySelector(
            "#cargando-diploma-react"
        ),
        error: modal.querySelector(
            "#error-diploma-react"
        ),
    };
}

/**
 * Configura el botón y el modal del diploma.
 */
function configurarModalDiploma(btnAbrir) {
    if (!btnAbrir) {
        return;
    }

    const {
        modal,
        imagen,
        btnCerrar,
        cargando,
        error,
    } = crearModalDiploma();

    let elementoConFocoAnterior = null;

    function abrirModalDiploma() {
        const rutaDiploma =
            btnAbrir.dataset.diplomaSrc ||
            "./images/diploma react.jpeg";

        elementoConFocoAnterior = document.activeElement;

        modal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");

        cargando.classList.remove("hidden");
        error.classList.add("hidden");
        imagen.classList.add("hidden");

        /*
         * La imagen se carga recién cuando el usuario
         * presiona el botón "Ver diploma".
         */
        imagen.src = rutaDiploma;

        btnCerrar.focus();
    }

    function cerrarModalDiploma() {
        modal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");

        imagen.removeAttribute("src");
        imagen.classList.add("hidden");

        cargando.classList.remove("hidden");
        error.classList.add("hidden");

        if (elementoConFocoAnterior instanceof HTMLElement) {
            elementoConFocoAnterior.focus();
        }
    }

    imagen.addEventListener("load", () => {
        cargando.classList.add("hidden");
        error.classList.add("hidden");
        imagen.classList.remove("hidden");
    });

    imagen.addEventListener("error", () => {
        cargando.classList.add("hidden");
        imagen.classList.add("hidden");
        error.classList.remove("hidden");
    });

    btnAbrir.addEventListener("click", abrirModalDiploma);
    btnCerrar.addEventListener("click", cerrarModalDiploma);

    modal.addEventListener("click", (event) => {
        const contenedor = modal.querySelector(
            "#contenedor-diploma-react"
        );

        if (
            event.target === modal ||
            event.target === contenedor
        ) {
            cerrarModalDiploma();
        }
    });

    document.addEventListener("keydown", (event) => {
        const modalEstaAbierto =
            !modal.classList.contains("hidden");

        if (event.key === "Escape" && modalEstaAbierto) {
            cerrarModalDiploma();
        }
    });
}

configurarModalDiploma(btnVerDiplomaReact);