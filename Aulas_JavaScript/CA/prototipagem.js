// Função construtora para criar objetos do tipo Animal
function Animal(nome) {
	this.nome = nome;
}

// Adicionando um método ao protótipo de Animal
Animal.prototype.falar = function () {
	console.log(`${this.nome} faz um barulho.`);
};

// Criando instâncias de Animal
const cachorro = new Animal('Cachorro');
const gato = new Animal('Gato');
const rato = new Animal('Rato');

// Chamando o método do protótipo
cachorro.falar(); // Cachorro faz um barulho.
gato.falar(); // Gato faz um barulho.
rato.falar();
