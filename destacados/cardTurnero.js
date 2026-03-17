const contenedorCards = document.getElementById("contendor-proyecto");
const btnTurnero = document.getElementById("btn-app-turnero");
const modalProyectos = document.getElementById("modal-proyectos");

btnTurnero.addEventListener("click", () => {
    contenedorCards.innerHTML = "";
    modalProyectos.classList.remove("hidden");
    const contenedorTurnero = document.createElement("div");
    contenedorTurnero.classList.add( "p-4", "text-center", "shadow-md", "mb-4");
    contenedorTurnero.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">Turnero</h3>
        <p class="text-gray-700 mb-4">Desarrollo de una aplicación de gestión de turnos para un servicio público. Implementación de funcionalidades como reserva de turnos, notificaciones y panel de administración.</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">Ver más</a>
    `;
    contenedorCards.appendChild(contenedorTurnero);
});