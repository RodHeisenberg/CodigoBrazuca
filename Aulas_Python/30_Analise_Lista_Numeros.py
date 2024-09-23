numeros = []

while True:
	numeros_inseridos = int(input("Digite um número para adicionar na lista (0 para terminar): "))
	numeros.append(numeros_inseridos)
	if numeros_inseridos <= 0:
		numeros.remove(0)
		break

print(f"O maior número da lista é {max(numeros)} e o menor número é o {min(numeros)}")
