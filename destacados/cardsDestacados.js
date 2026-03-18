const contenedorCards = document.getElementById("contendor-proyecto");
const btnECommerce = document.getElementById("btn-e-commerce");
const btnMultiUser = document.getElementById("btn-app-todo");
const btnTurnero = document.getElementById("btn-app-turnero");
const modalProyectos = document.getElementById("modal-proyectos");

function abrirModal(titulo, descripcion) {
    contenedorCards.innerHTML = "";
    modalProyectos.classList.remove("hidden");

    const contenedor = document.createElement("div");
    contenedor.classList.add("p-4", "text-center", "shadow-md", "mb-4");
    contenedor.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${titulo}</h3>
        <p class="text-gray-700 mb-4">${descripcion}</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">Ver más</a>
    `;
    contenedorCards.appendChild(contenedor);
}

//Botones
btnECommerce.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "E-Commerce",
        "Desarrollo de una plataforma de comercio electrónico utilizando React, Node.js y MongoDB. Implementación de funcionalidades como carrito de compras, pasarela de pago y panel de administración."
    );
});

btnMultiUser.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "Multi-User",
        "Desarrollo de una aplicación web multiusuario utilizando React y Node.js. Implementación de funcionalidades como autenticación, gestión de usuarios y colaboración en tiempo real."
    );
});

btnTurnero.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(
        "Turnero",
        "Desarrollo de una aplicación de gestión de turnos para un servicio público. Implementación de funcionalidades como reserva de turnos, notificaciones y panel de administración."
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
