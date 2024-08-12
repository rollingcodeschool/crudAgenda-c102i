import Contacto from "./classContacto.js";
import { validarCantidadCaracteres } from "./validaciones.js";

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
const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];
const tbody = document.querySelector("tbody");
console.log(tbody);

//funciones
const mostrarModal = () => {
  modalAdminContacto.show();
};

const crearContacto = (e) => {
  e.preventDefault();
  // crear un contacto
  //validar los datos del formulario
  if(validarCantidadCaracteres(nombre,3,50) && validarCantidadCaracteres(apellido,3,30)){
    //los datos son validos 
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
    console.log(contactoNuevo);
    //agregar el contacto al array
    listaContactos.push(contactoNuevo);
    console.log(listaContactos);
    limpiarFormulario();
    //guardar array en el localstorage
    guardarEnLocalStorage();
    //dibuja la nueva fila
    dibujarFila(contactoNuevo);
  }else{
    console.log('hay errores en la carga')
  }

};

const limpiarFormulario = () => {
  formRegistrarContacto.reset();
  //agregar el resetear el style del input
  // asignarle form-control
  nombre.className = 'form-control';
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("agendaKey", JSON.stringify(listaContactos));
};

const editarContacto = () => {
  console.log("desde la funcion editar contacto");
};

window.borrarContacto = (id) => {
  Swal.fire({
    title: "¿Esta seguro de borrar el contacto?",
    text: "No puedes revertir posteriormente este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#7066E0",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      //agregar la logica para borrar
      console.log(id);
      // 1- buscar en que posicion del array esta el objeto que tiene el id
      const posicionContacto = listaContactos.findIndex(
        (contacto) => contacto.id === id
      );
      console.log(posicionContacto);
      // 2 - borrar el elemento de la posicion encontrada
      listaContactos.splice(posicionContacto, 1);
      // 3 - actualizar el localstorage
      guardarEnLocalStorage();
      //actualizar la tabla de contactos
      console.log(tbody.children[posicionContacto]);
      tbody.removeChild(tbody.children[posicionContacto]);

      Swal.fire({
        title: "Contacto borrado",
        text: "El contacto seleccionado fue eliminado correctamente",
        icon: "success",
      });
    }
  });
};

const cargaInicialTablaContactos = () => {
  //cargar los datos en la tabla
  if (listaContactos.length !== 0) {
    //dibujar una fila
    listaContactos.map((contacto) => dibujarFila(contacto));
  }
};

const dibujarFila = (contacto) => {
  // tbody.innerHTML = tbody.innerHTML + ''
  tbody.innerHTML += ` <tr>
                <td>${contacto.id}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.email}</td>
                <td>${contacto.celular}</td>
                <td>
                  <button class="btn btn-warning">Editar</button>
                  <button class="btn btn-danger" onclick="borrarContacto('${contacto.id}')">Borrar</button>
                  <button class="btn btn-info">Ver</button>
                </td>
              </tr>
     `;
};

//agregar los manejadores de eventos
btnAgregarContacto.addEventListener("click", mostrarModal);
formRegistrarContacto.addEventListener("submit", crearContacto);

cargaInicialTablaContactos();
