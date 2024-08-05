import Contacto from "./classContacto.js";

// crear variables
const contactoNuevo = new Contacto(undefined,'Rosario', 'Pittaro', 'Ro','algun lugar','381566777', 'rosario@mail.com','link')
const modalAdminContacto = new bootstrap.Modal (document.querySelector('#modalContacto'));
const btnAgregarContacto = document.querySelector('.btn-primary')

//funciones
const mostrarModal = ()=>{
    modalAdminContacto.show();
}

//agregar los manejadores de eventos
btnAgregarContacto.addEventListener('click', mostrarModal);


// crear un contacto
//abri el modal, completar el formulario
//submit del form, tomar todos los datos de los input y crear un objeto Contacto
//luego al contacto lo guardo en un array de contactos




const editarContacto = ()=>{
    console.log('desde la funcion editar contacto')
}