const contenedorCards = document.getElementById("contendor-proyecto");
const btnMultiUser = document.getElementById("btn-app-todo");
const modalProyectos = document.getElementById("modal-proyectos");

btnMultiUser.addEventListener("click", () => {
    contenedorCards.innerHTML = "";
    modalProyectos.classList.remove("hidden");
    const contenedorMultiUser = document.createElement("div");
    contenedorMultiUser.classList.add( "p-4", "text-center", "shadow-md", "mb-4");
    contenedorMultiUser.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">Multi-User</h3>
        <p class="text-gray-700 mb-4">Desarrollo de una aplicación web multiusuario utilizando React y Node.js. Implementación de funcionalidades como autenticación, gestión de usuarios y colaboración en tiempo real .</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">Ver más</a>
    `;
    contenedorCards.appendChild(contenedorMultiUser);
});