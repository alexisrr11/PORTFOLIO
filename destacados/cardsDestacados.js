import { translations, getLang } from "../idiomas/i18n.js";

const contenedorCards = document.getElementById("contendor-proyecto");
const btnECommerce = document.getElementById("btn-e-commerce");
const btnMultiUser = document.getElementById("btn-app-todo");
const btnTurnero = document.getElementById("btn-app-turnero");
const modalProyectos = document.getElementById("modal-proyectos");
export let currentProject = null;

export function abrirModal(projectKey, imagenes = [], tecnologias = []) {

    const lang = getLang();
    const t = translations[lang]?.projects?.[projectKey];

    if (!t) {
        console.error("❌ ERROR: proyecto no encontrado");
        return;
    }

    const titulo = t.title;
    const descripcion = t.description;
    const descripciones = t.imagesDesc;

    currentProject = { projectKey, imagenes, tecnologias };

    contenedorCards.innerHTML = "";
    modalProyectos.classList.remove("hidden");

    const contenedor = document.createElement("div");
    contenedor.classList.add("pt-10", "px-6", "text-center", "max-h-[99vh]", "overflow-y-auto"
    );

    const tecnologiasHTML = tecnologias.map(tech => `
        <span class="flex justify-center items-center">
            ${tech}
        </span>
    `).join("");

    // Miniaturas con data-index
    const imagenesHTML = imagenes.map((img, index) => `
        <img src="${img}" alt="${titulo}" 
             class="min-w-32 max-w-32 h-auto cursor-pointer" 
             data-index="${index}">
    `).join("");

    contenedor.innerHTML = `
        <h3 class="text-2xl font-semibold mb-2">${titulo}</h3>
        <div class="flex flex-col gap-4 my-4">
  <div class="flex justify-center items-stretch gap-6 m-auto">
    <!-- Contenedor de miniaturas -->
    <div class="flex flex-col gap-2 h-full">
      ${imagenesHTML}
    </div>

    <!-- Contenedor de imagen principal y elementos -->
    <div class="flex flex-col text-start h-full">
      <div class="flex justify-center items-center h-full">
  <img id="imagen-principal" class="w-[50vw]" src="${imagenes[0]}" alt="">
</div>
      <h4 class="font-semibold my-2">${translations[lang]["modal.description"]}</h4>
      <p id="descripcion-principal" class="text-gray-400">${descripciones[0] || descripcion}</p>
      <h5 class="font-semibold mt-2">${translations[lang]["modal.technologies"]}</h5>
      <div class="flex flex-wrap gap-2 my-2">
        ${tecnologiasHTML}
        </div>
      <a href="#"
         class="bg-gray-700 rounded-lg p-4 text-start">
            ${translations[lang]["modal.repo"]}
        <i class="bxl bx-github text-2xl"></i>
      </a>
    </div>
  </div>
</div>
    `;

    contenedorCards.appendChild(contenedor);

    // Eventos de clic en miniaturas
    contenedor.querySelectorAll("img[data-index]").forEach(img => {
        img.addEventListener("click", () => {
            const index = img.getAttribute("data-index");
            const principal = document.getElementById("imagen-principal");
            const descripcionPrincipal = document.getElementById("descripcion-principal");

            principal.src = imagenes[index]; // Cambia imagen principal
            descripcionPrincipal.textContent = descripciones[index] || descripcion; // Cambia descripción
        });
    });
}

//Botones
btnECommerce.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "ecommerce",
        [
            "./images/e-commerce.png",
            "./images/e-commerce(likes).png",
            "./images/e-commerce(carritoCompras).png"
        ],
        [
            '<i class="text-4xl text-orange-600 bxl bx-html5"></i>',
            '<i class="text-4xl text-blue-500 bxl bx-css3"></i>',
            '<i class="text-4xl text-yellow-400 bxl bx-javascript"></i>'
        ]
    );
});

btnMultiUser.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "multiuser",
        [
            "./images/app market.png",
            "./images/appMarket(login).png",
            "./images/appMarket(registro).png",
        ],
        [
            '<i class="text-4xl text-orange-600 bxl bx-html5"></i>',
            '<i class="text-4xl text-blue-400 bxl bx-tailwind-css"></i>',
            '<i class="text-4xl text-yellow-400 bxl bx-javascript"></i>',
            '<i class="text-4xl text-green-400 bxl bx-nodejs"></i>',
            '<i class="text-4xl text-gray-400 bxl bx-express-js"></i>',
            '<i class="text-4xl text-blue-400 bxl bx-postgresql"></i>'
        ]
    );
});

btnTurnero.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "turnero",
        [
            "./images/appTurnos(suscripcion).png",
            "./images/appTurnos(registroEmpresa).png",
            "./images/appTurnos(registroAdmin).png",
            "./images/appTurnos(loginAdmin).png",
            "./images/appTurnos(dashboardEmpresa).png",
            "./images/appTurnos(registroCliente).png",
            "./images/appTurnos(dashboardCliente).png"
        ],
        [
            '<i class="text-4xl text-orange-600 bxl bx-html5"></i>',
            '<i class="text-4xl text-blue-400 bxl bx-tailwind-css"></i>',
            '<i class="text-4xl text-yellow-400 bxl bx-javascript"></i>',
            '<i class="text-4xl text-green-400 bxl bx-nodejs"></i>',
            '<i class="text-4xl text-gray-400 bxl bx-express-js"></i>',
            '<i class="text-4xl text-blue-400 bxl bx-postgresql"></i>'
        ]
    );
});

// Cerrar con clic fuera
document.addEventListener("click", (e) => {
    if (!modalProyectos.classList.contains("hidden")) {
        if (!modalProyectos.contains(e.target) &&
            e.target !== btnECommerce &&
            e.target !== btnMultiUser &&
            e.target !== btnTurnero) {
            modalProyectos.classList.add("hidden");
        }
    }
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalProyectos.classList.contains("hidden")) {
        modalProyectos.classList.add("hidden");
    }
});
