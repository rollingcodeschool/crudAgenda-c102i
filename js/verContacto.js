//extraer el parametro de la url
console.log(window.location.search)

const paramId = new URLSearchParams(window.location.search).get('id')
console.log(paramId)

const listaContactos = JSON.parse(localStorage.getItem("agendaKey")) || [];

const contactoBuscado = listaContactos.find((contacto)=> contacto.id === paramId);
console.log(contactoBuscado);