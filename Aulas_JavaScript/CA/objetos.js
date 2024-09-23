// Criação de um objeto carro com propriedades e métodos
const carro = {
	cor: 'vermelho',
	modelo: 'sedan',
	ano: 2020,
	ligar: function () {
		console.log('O carro está ligado.');
	},
	acelerar: function () {
		console.log('O carro está acelerando.');
	}
};

// Acessando as propriedades do objeto
console.log(carro.cor); // vermelho
console.log(carro.modelo); // sedan

// Chamando os métodos do objeto
carro.ligar(); // O carro está ligado.
carro.acelerar(); // O carro está acelerando.
