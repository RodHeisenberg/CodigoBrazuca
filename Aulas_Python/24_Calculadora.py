primeiro_numero = float(input("Digite o primeiro número: "))
segundo_numero = float(input("Digite o segundo número: "))


def somar(primeiro_numero, segundo_numero):
	return primeiro_numero + segundo_numero

def subtrair(primeiro_numero, segundo_numero):
	return primeiro_numero - segundo_numero

def multiplicar(primeiro_numero, segundo_numero):
	return primeiro_numero * segundo_numero

def dividir(primeiro_numero, segundo_numero):
	return primeiro_numero / segundo_numero


def perguntar_operador():
	operador = str(input('''Digite o operador digitando os seguintes números\n(1 = Adição | 2 = Subtração | 3 = Multiplicação | 4 = Divisão): '''))
	if operador == "1": # Adição
		print(f"\nResultado: {primeiro_numero + segundo_numero}")
	elif operador == "2": # Subtração
		print(f"\nResultado: {primeiro_numero - segundo_numero}")
	elif operador == "3": # Multiplicação
		print(f"\nResultado: {primeiro_numero * segundo_numero}")
	elif operador == "4": # Divisão
		print(f"\nResultado: {primeiro_numero / segundo_numero}")
	else:
		print("\nOperador inválido, tente novamente.")
		perguntar_operador()


perguntar_operador()
