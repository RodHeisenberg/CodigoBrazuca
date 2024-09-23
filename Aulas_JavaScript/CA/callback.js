function fazerRequisicao(callback) {
	console.log("Iniciando a requisição...");
	setTimeout(() => {
		callback("Dados Recebidos");
	}, 10000);
}


// Usando callback para processar os dados
fazerRequisicao((dados) => {
	console.log(dados);
});
