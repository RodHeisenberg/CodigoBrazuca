soma_pares = 0

for numeros in range(1, 101):
	if numeros % 2 == 0:
		soma_pares += numeros

print(f"Soma de todos os números pares de 1 a 100 é {soma_pares}")
