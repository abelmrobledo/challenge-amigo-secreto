// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arreglo de amigos
let amigos = [];

//Funcion validacion de datos
function validarIngreso(amigo) {
  if (amigo.length == 0) {
    alert("Por favor, inserte un nombre.");
    return false;
  }
  return true;
}

//Funcion agregar amigos a la lista(Array)
function agregarAmigo() {
  let nombre;
  nombre = document.getElementById("amigo").value;
  if (validarIngreso(nombre)) {
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
  }
}

//Funcion para sortear amigo
function sortearAmigo() {
  if (amigos.length > 0) {
    let indice = Math.floor(Math.random() * amigos.length);
	let lista = document.getElementById("listaAmigos");
	lista.innerHTML = "";
	let resultado;
	resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
	let li = document.createElement("li");
    li.appendChild(document.createTextNode("El amigo secreto sorteado es:"+amigos[indice]));
    resultado.appendChild(li);   
  }
  else{
	alert("No hay amigos para sortear");
  }
}

//Funcion actualizar lista de amigos
function actualizarListaAmigos() {
  let lista;
  lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(amigos[i]));
    lista.appendChild(li);
  }
}
