let amigos = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    // Validación: no permitir nombres vacíos
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validación: no permitir nombres duplicados (ignora mayúsculas/minúsculas)
    if (amigos.map(a => a.toLowerCase()).includes(nombre.toLowerCase())) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa uno diferente.');
        nombreInput.value = '';
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreInput.value = ''; // Limpiar el campo de texto
    nombreInput.focus(); // Devolver el foco al campo de texto
}

function sortearAmigo() {
    // Validación: se necesitan al menos 2 amigos para sortear.
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Generar un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>${amigoSecreto}</li>`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    const listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = ''; // Limpiar la lista para evitar duplicados
    for (let amigo of amigos) {
        const elementoAmigo = document.createElement('li');
        elementoAmigo.textContent = amigo;
        listaElemento.appendChild(elementoAmigo);
    }
}

// Permitir agregar amigos presionando la tecla "Enter"
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo(); // Llamar a la función con el nombre correcto
    }
});
