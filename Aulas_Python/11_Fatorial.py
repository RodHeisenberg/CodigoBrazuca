numero = int(input("Digite um número: "))
fatorial = 1

for i in range(numero):
	fatorial *= i + 1

print(f"O fatorial de {numero} é {fatorial}.")
