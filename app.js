// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function listar() {
    lista.innerHTML = '';
    for (let index = 0; index < amigos.length; index++) {
        lista.innerHTML += `<li>${amigos[index]}</li>`;
    }
}

function agregarAmigo() {
    if(document.getElementById('amigo').value == '')
        alert('Por favor, inserte un nombre.');
    else{
        amigos.push(document.getElementById('amigo').value);
        limpiarCaja();
    }
        console.log(amigos);
        listar();
}

function sortearAmigo() {
    console.log(lista.length);
    if (amigos.length === 0) {
        alert('No se ingreso ningun nombre.');
    } else {
        document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${amigos[parseInt(Math.floor(Math.random() * (amigos.length)))]}</li>`
    }
    
}