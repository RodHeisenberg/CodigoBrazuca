// Tentando analisar uma string JSON inválida
try {
	const dados = JSON.parse('{"chave": valor}');
} catch (erro) {
	console.error('Falha ao analisar JSON:', erro.message);
} finally {
	console.log('Operação concluída.');
}

// Criando um erro personalizado
function dividir(a, b) {
	if (b === 0) {
		throw new Error('Divisão por zero não é permitida');
	}
	return a / b;
}

try {
	console.log(dividir(10, 0));
} catch (erro) {
	console.error('Erro:', erro.message);
}
