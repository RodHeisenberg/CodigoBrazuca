def eh_primo(numero):
	if numero <= 2:
		return False
	for i in range(2, int(numero ** 0.5) + 1):
		if numero % i == 0:
			return False
		return True

inicio = int(input("Digite o início do intervalo: "))
fim = int(input("Digite o fim do intervalo: "))

print(f"Os números primos entre {inicio} e {fim} são:")
for numero in range(inicio, fim + 1):
	if eh_primo(numero):
		print(numero)
