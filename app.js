// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
// lo agregarán a una lista visible al hacer clic en "Adicionar".


// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
// lo agregarán a una lista visible al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta 
// pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará 
// aleatoriamente un nombre de la lista y se mostrará en la página.


let participantes = [];

// Función de ayuda para asignar texto a un elemento del DOM.
function asignarTextoElemento(elemento, texto) {
  const elementoHTML = document.querySelector(elemento);
  if (elementoHTML) {
    elementoHTML.innerHTML = texto;
  }
}

// Limpia el campo de entrada.
function limpiarCaja() {
  document.querySelector('#amigo').value = '';
}

// Resetea la aplicación a su estado inicial.
function condicionesIniciales() {
  participantes = [];
  asignarTextoElemento('h1', 'Amigo Secreto');
  asignarTextoElemento('#listaAmigos', '');
  asignarTextoElemento('#resultado', '');
}

// Agrega un nuevo participante después de pasar varias validaciones.
function agregarAmigo() {
  const nombre = document.querySelector('#amigo').value.trim();

  // Validación: Nombre no puede estar vacío.
  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  // Validación: Nombre no puede contener espacios.
  if (nombre.includes(" ")) {
    alert('El nombre no puede contener espacios.');
    return;
  }

  // Validación: Nombre no puede ser demasiado largo.
  if (nombre.length > 10) {
    alert('El nombre no puede tener más de 10 caracteres.');
    return;
  }

  // Validación: No se permiten nombres duplicados.
  if (participantes.includes(nombre)) {
    alert('Ese amigo ya está participando.');
    return;
  }

  // Si todas las validaciones pasan, se agrega el nombre a la lista.
  participantes.push(nombre);
  limpiarCaja();
  mostrarLista();
}

// Borra todos los participantes y limpia la lista
function borrarParticipantes() {
  if (participantes.length === 0) {
    alert("No hay participantes para borrar.");
    return;
  }

  if (confirm("¿Seguro que quieres borrar todos los participantes?")) {
    participantes = [];
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', '');
  }
}


// Muestra la lista de participantes usando el formato correcto de HTML.
function mostrarLista() {
  const listaHTML = participantes.map(p => `<li>${p}</li>`).join('');
  asignarTextoElemento('#listaAmigos', listaHTML);
}

// Realiza el sorteo y muestra el resultado.
function sortearAmigo() {
  if (participantes.length === 0) {
    alert("No hay amigos en la lista. Agrega al menos uno.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * participantes.length);
  const amigoSorteado = participantes[indiceAleatorio];

  asignarTextoElemento('#resultado', `¡El amigo sorteado es: **${amigoSorteado}**!`);
}

// Se asegura de que la aplicación se inicie en su estado inicial cuando la página carga.
window.onload = condicionesIniciales;

