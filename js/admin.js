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
const tbody = document.querySelector('tbody');
console.log(tbody);

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

const cargaInicialTablaContactos = ()=>{
    //cargar los datos en la tabla
    if(listaContactos.length !== 0){
        //dibujar una fila
        listaContactos.map((contacto)=> dibujarFila(contacto))
    }
}

const dibujarFila = (contacto)=>{
    // tbody.innerHTML = tbody.innerHTML + ''
     tbody.innerHTML += ` <tr>
                <td>${contacto.id}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>rosario@mail.com</td>
                <td>3815556644</td>
                <td>
                  <button class="btn btn-warning">Editar</button>
                  <button class="btn btn-danger">Borrar</button>
                  <button class="btn btn-info">Ver</button>
                </td>
              </tr>
     `
}

//agregar los manejadores de eventos
btnAgregarContacto.addEventListener("click", mostrarModal);
formRegistrarContacto.addEventListener("submit", crearContacto);

cargaInicialTablaContactos();
