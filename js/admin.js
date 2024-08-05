import Contacto from "./classContacto.js";

// crear variables

const modalAdminContacto = new bootstrap.Modal(
  document.querySelector("#modalContacto")
);
const btnAgregarContacto = document.querySelector(".btn-primary");
const formRegistrarContacto = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email"),
  apodo = document.querySelector("#apodo"),
  celular = document.querySelector("#celular");
const foto = document.querySelector("#foto");
const direccion = document.querySelector("#direccion");
const listaContactos = JSON.parse(localStorage.getItem('agendaKey')) || [];

//funciones
const mostrarModal = () => {
  modalAdminContacto.show();
};

const crearContacto = (e) => {
  e.preventDefault();
  // crear un contacto
  //validar los datos del formulario
  const contactoNuevo = new Contacto(
    undefined,
    nombre.value,
    apellido.value,
    apodo.value,
    direccion.value,
    celular.value,
    email.value,
    foto.value
  );
  console.log(contactoNuevo)
  //agregar el contacto al array
  listaContactos.push(contactoNuevo);
  console.log(listaContactos)
  limpiarFormulario();
  //guardar array en el localstorage
  guardarEnLocalStorage()
};

const limpiarFormulario = ()=>{
    formRegistrarContacto.reset();
}

const guardarEnLocalStorage = ()=>{
    localStorage.setItem('agendaKey', JSON.stringify(listaContactos))
}

const editarContacto = () => {
  console.log("desde la funcion editar contacto");
};

//agregar los manejadores de eventos
btnAgregarContacto.addEventListener("click", mostrarModal);
formRegistrarContacto.addEventListener("submit", crearContacto);
