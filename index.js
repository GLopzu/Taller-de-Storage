const form = document.getElementById("form");
const usuariosDiv = document.getElementById("usuarios");


const obtenerUsuarios = () =>
  JSON.parse(localStorage.getItem("usuarios")|| []) ;


const almacenarUsuario = (nombre, apellido) => {
  const usuarios = obtenerUsuarios();
  usuarios.push({ nombre, apellido });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};


const renderizarUsuarios = () => {
  const usuarios = obtenerUsuarios();
  usuariosDiv.innerHTML = "";
  usuarios.forEach((usuario) => {
    const usuarioDiv = document.createElement("div");
    usuarioDiv.textContent = `${usuario.nombre} ${usuario.apellido}`;
    usuariosDiv.appendChild(usuarioDiv);
  });
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  almacenarUsuario(nombre, apellido);
  renderizarUsuarios();
  form.reset();
});


renderizarUsuarios();