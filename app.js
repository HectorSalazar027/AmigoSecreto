// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Salazar Rubi Héctor Manuel

let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    
    amigos.push(nombre);

    inputAmigo.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un amigo en la lista para realizar el sorteo.");
        return;
    }
    
    // Seleccionar un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    
    document.getElementById("listaAmigos").innerHTML = "";
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p style='color: green; font-weight: bold;'>El amigo secreto sorteado es: ${amigoSeleccionado}</p>`;
}
