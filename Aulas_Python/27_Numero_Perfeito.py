numero = int(input("Digite um número para verificar se ele é perfeito: "))

soma_divisores = 0
for i in range(1, numero-1):
	if numero % i == 0:
		soma_divisores += i

if soma_divisores == numero:
    print(f"{numero} é um número perfeito!")
else:
    print(f"{numero} não é um número perfeito.")
