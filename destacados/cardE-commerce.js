const contenedorCards = document.getElementById("contendor-proyecto");
const btnECommerce = document.getElementById("btn-e-commerce");
const modalProyectos = document.getElementById("modal-proyectos");

btnECommerce.addEventListener("click", () => {
    contenedorCards.innerHTML = "";
    modalProyectos.classList.remove("hidden");
    const contenedorEcommerce = document.createElement("div");
    contenedorEcommerce.classList.add( "p-4", "text-center", "shadow-md", "mb-4");
    contenedorEcommerce.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">E-Commerce</h3>
        <p class="text-gray-700 mb-4">Desarrollo de una plataforma de comercio electrónico utilizando React, Node.js y MongoDB. Implementación de funcionalidades como carrito de compras, pasarela de pago y panel de administración.</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">Ver más</a>
    `;
    contenedorCards.appendChild(contenedorEcommerce);
});