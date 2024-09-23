def eh_palindromo(palavra):
	palavra = palavra.replace(" ", "").lower()
	return palavra == palavra[::-1]

frase = input("Digite uma palavra ou uma frase: ")

if eh_palindromo(frase):
	print(f'"{frase}" é um palíndromo')
else:
	print(f'"{frase}" não é um palíndromo')
