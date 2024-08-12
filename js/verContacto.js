//extraer el parametro de la url
const paramId = new URLSearchParams(window.location.search).get('id')
const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];

function dibujarContacto (){
    const contenedor = document.querySelector('#contenedorCard')
    console.log(contenedor);
    contenedor.innerHTML = `<div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src=${contactoBuscado.foto} class="img-fluid rounded-start" alt=${contactoBuscado.apodo}>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${contactoBuscado.apellido}, ${contactoBuscado.nombre}</h5>
                <ul class="list-unstyled">
                  <li>Apodo: ${contactoBuscado.apodo}</li>
                  <li>Celular: ${contactoBuscado.celular}</li>
                  <li>Email: ${contactoBuscado.email}</li>
                  <li>Dirección: ${contactoBuscado.direccion}</li>
                </ul>
                </div>
            </div>
          </div>
        </div>`
}


const contactoBuscado = listaContactos.find((contacto)=> contacto.id === paramId);
console.log(contactoBuscado);

//dibujar contacto

dibujarContacto();