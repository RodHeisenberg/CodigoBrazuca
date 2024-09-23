numero = int(input("Quantos números da sequência fibonacci você deseja ver? "))

fibonacci = [0, 1]

for i in range(2, numero):
	proximo_numero = fibonacci[-1] + fibonacci[-2]
	fibonacci.append(proximo_numero)

print("Sequência de Fibonacci:")
for numero in fibonacci[:numero]:
	print(numero)
