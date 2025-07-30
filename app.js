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


let listaNombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function condicionesIniciales() {
    listaNombres = [];
    asignarTextoElemento('h1', 'Amigo Secreto');
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', '');
}

function agregarAmigo() {
    let nombre = document.querySelector('#amigo').value;

    if (nombre.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    nombre = nombre.trim();

    if (listaNombres.includes(nombre)) {
        alert('Ese amigo ya está participando.');
        return;
    }

    listaNombres.push(nombre);
    limpiarCaja();
    mostrarLista();
}


function mostrarLista() {
    let listaHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        listaHTML += `<li>${listaNombres[i]}</li>`;
    }
    asignarTextoElemento('#listaAmigos', listaHTML);
}


function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno.");
        return;
    }

    let indice = Math.floor(Math.random() * listaNombres.length);
    let amigoSorteado = listaNombres[indice];

    asignarTextoElemento('#resultado', `<li>El amigo sorteado es: ${amigoSorteado}</li>`);
}

