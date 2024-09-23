numero = int(input("Digite um número: "))

soma_numeros = 0
for i in range(1, numero + 1):
	soma_numeros += i

print(f"A soma dos primeiros {numero} números é: {soma_numeros}")
