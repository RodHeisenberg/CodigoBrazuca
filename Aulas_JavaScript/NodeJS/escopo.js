let global = " Estou fora de FUNÇÃO"

function mostrarEscopo() {
	let local = " Estou dentro de uma função";
	console.log(global);
	console.log(local);
}

mostrarEscopo();
console.log(local);
// exibirá erro aqui, devido LOCAL
