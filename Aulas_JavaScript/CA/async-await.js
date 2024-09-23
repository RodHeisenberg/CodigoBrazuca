// Função que retorna uma Promise
function buscarDados() {
	return new Promise((resolve) => {
		console.log('Buscando dados...');
		setTimeout(() => {
			resolve('Dados recebidos');
		}, 10000);
	});
}

// Função assíncrona que usa await
async function obterDados() {
	try {
		const dados = await buscarDados();
		console.log(dados);
	} catch (erro) {
		console.error('Erro:', erro);
	} finally {
		console.log('Operação concluída.');
	}
}

// Chamando a função assíncrona
obterDados();
