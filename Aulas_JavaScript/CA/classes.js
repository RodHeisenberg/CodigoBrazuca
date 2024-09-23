// Definição de uma classe Animal
class Animal {
	constructor(nome) {
		this.nome = nome;
	}

	falar() {
		console.log(`${this.nome} faz um barulho.`);
	}
}

// Criando instâncias da classe Animal
const coelho = new Animal('Coelho');
const passaro = new Animal('Pássaro');

// Chamando o método da classe
coelho.falar(); // Coelho faz um barulho.
passaro.falar(); // Pássaro faz um barulho.
