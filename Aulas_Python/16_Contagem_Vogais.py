frase = input("Digite uma frase: ")

vogais = "aeiouAEIOU"

contagem = 0

for letra in frase:
	if letra in vogais:
		contagem += 1

print(f'A frase "{frase}" tem {contagem} vogais')
