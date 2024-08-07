const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];
const grilla = document.querySelector(".row");
console.log("test");
const cargaInicialTablaContactos = () => {
  if (listaContactos.length !== 0) {
    listaContactos.map((contacto) => dibujarFila(contacto));
  }
};

const dibujarFila = (contacto) => {
  grilla.innerHTML += ` <div class="col-md-4 col-lg-3 mb-3">
    <div class="card h-100">
            <img
              src=${contacto.foto}
              class="card-img-top"
              alt=${contacto.apellido} ${contacto.nombre}
            />
            <div class="card-body">
              <h5 class="card-title">${contacto.apellido} ${contacto.nombre}</h5>
              <ul class="list-unstyled">
                <li><i class="bi bi-person-fill"></i> Apodo: ${contacto.apodo}</li>
                <li><i class="bi bi-telephone-fill"></i> Celular: ${contacto.celular}</li>
              </ul>
             
            </div>
             <div class="card-footer text-body-secondary text-end">
                <button class="btn btn-primary">Ver mas...</button>
              </div>
          </div>
          </div>
     `;
};

cargaInicialTablaContactos();
