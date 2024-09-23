// Função que retorna uma Promise
function buscarDados() {
	return new Promise((resolve, reject) => {
		console.log('Buscando dados...');
		setTimeout(() => {
			const sucesso = true; // Simulando sucesso ou falha
			if (sucesso) {
				resolve('Dados recebidos');
			} else {
				reject('Erro ao buscar dados');
			}
		}, 10000);
	});
}

// Usando a Promise para buscar dados
buscarDados()
	.then((dados) => {
		console.log(dados);
	})
	.catch((erro) => {
		console.error('Erro:', erro);
	})
	.finally(() => {
		console.log('Operação concluída.');
	});
