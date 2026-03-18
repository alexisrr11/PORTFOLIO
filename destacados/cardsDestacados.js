const contenedorCards = document.getElementById("contendor-proyecto");
const btnECommerce = document.getElementById("btn-e-commerce");
const btnMultiUser = document.getElementById("btn-app-todo");
const btnTurnero = document.getElementById("btn-app-turnero");
const modalProyectos = document.getElementById("modal-proyectos");

function abrirModal(titulo, descripcion, imagenes = []) {
    contenedorCards.innerHTML = "";
    modalProyectos.classList.remove("hidden");

    const contenedor = document.createElement("div");
    contenedor.classList.add("pt-10", "px-6", "text-center");

    const imagenesHTML = imagenes.map(img => `
        <img src="${img}" alt="${titulo}" class="w-32 h-auto">
    `).join("");

    contenedor.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${titulo}</h3>
        <div class="flex flex-col gap-4 my-4">
            <div class="flex justify-center items-center gap-2 m-auto">
                <button class="flex flex-col gap-2">${imagenesHTML}</button>
                <div class="text-start mt-4">
                    <img class="w-[50vw]" src="${imagenes[0]}" alt="">
                    <h4 class="font-semibold my-2">Descripción</h4>
                    <p class="text-gray-400">${descripcion}</p>
                    <h5 class="font-semibold my-2">Tecnologías</h5>
                    <p class="my-4">HTML, CSS y JS</p>
                    <a 
                    href="#"
                    class="bg-gray-700 rounded-lg p-4 text-start"
                    >
                        Ver Respositorio
                        <i class="bxl bx-github text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    `;

    contenedorCards.appendChild(contenedor);
}

//Botones
btnECommerce.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "E-Commerce",
        "Desarrollo de una plataforma de comercio electrónico utilizando React, Node.js y MongoDB. Implementación de funcionalidades como carrito de compras, pasarela de pago y panel de administración.",
        [
            "./images/e-commerce.png",
            "./images/e-commerce(likes).png",
            "./images/e-commerce(carritoCompras).png"
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
        ]
    );
});

btnTurnero.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "Turnero",
        "Desarrollo de una aplicación de gestión de turnos para un servicio público. Implementación de funcionalidades como reserva de turnos, notificaciones y panel de administración.",
        [
            "./images/app turnos.png",
            "./images/appTurnos(suscripcion).png",
            "./images/appTurnos(registroEmpresa).png",
            "./images/appTurnos(registroAdmin).png",
            "./images/appTurnos(loginAdmin).png",
            "./images/appTurnos(dashboardEmpresa).png",
            "./images/appTurnos(registroCliente).png",
            "./images/appTurnos(dashboardCliente).png"
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
