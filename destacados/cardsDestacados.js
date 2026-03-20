const contenedorCards = document.getElementById("contendor-proyecto");
const btnECommerce = document.getElementById("btn-e-commerce");
const btnMultiUser = document.getElementById("btn-app-todo");
const btnTurnero = document.getElementById("btn-app-turnero");
const modalProyectos = document.getElementById("modal-proyectos");

function abrirModal(titulo, descripcion, imagenes = [], descripciones = [], tecnologias = []) {
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
             class="w-32 h-auto cursor-pointer" 
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
      <h4 class="font-semibold my-2">Descripción</h4>
      <p id="descripcion-principal" class="text-gray-400">${descripciones[0] || descripcion}</p>
      <h5 class="font-semibold mt-2">Tecnologías</h5>
      <div class="flex flex-wrap gap-2 my-2">
        ${tecnologiasHTML}
        </div>
      <a href="#"
         class="bg-gray-700 rounded-lg p-4 text-start">
        Ver Repositorio
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
        "E-Commerce",
        "Descripción general del proyecto",
        [
            "./images/e-commerce.png",
            "./images/e-commerce(likes).png",
            "./images/e-commerce(carritoCompras).png"
        ],
        [
            "Vista principal de la tienda",
            "Pantalla de productos con likes",
            "Carrito de compras en acción"
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
        "Multi-User",
        "Desarrollo de una aplicación web multiusuario utilizando React y Node.js. Implementación de funcionalidades como autenticación, gestión de usuarios y colaboración en tiempo real.",
        [
            "./images/app market.png",
            "./images/appMarket(login).png",
            "./images/appMarket(registro).png",
        ],
        [
            "Vista principal de la tienda",
            "Pantalla de productos con likes",
            "Carrito de compras en acción"
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
        "Practical Session",
        "Desarrollo de una aplicación de gestión de turnos para un servicio público. Implementación de funcionalidades como reserva de turnos, notificaciones y panel de administración.",
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
            "Practical Session es una aplicación SaaS, multi-tenant y esta compuesta por un software, una base de datos y multiples clientes. Esta app no va tener optimizaciones de CEO y va a mantener un flujo al rededor de 20 empresas, ya que al tener una sola DB debe ser sostenible el rendimineto para evitar demoras en el sistema. La seguridad de los datos tanto de las empresas como los clientes de cada empresa estan vinculados a un id_empresarial, sifrado con JWT. La creación de usuarios empresariales como clientes de empresas son ilimitados en la versión free, pero en el caso de no abonar dentro de los 6 meses el plan premium se borrara todos los datos vinculados. He buscado crear un software adaptable para cualquier empresa, automatizando la toma de turnos, dandole la posibilidad de deslegar trabajos de agenda.",
            "Pantalla de productos con likes",
            "Carrito de compras en acción"
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
