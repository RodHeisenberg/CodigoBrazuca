frase = str(input("Digite uma frase pra saber quantas palavras ela possui: "))

quantidade_palavras = len(frase.split())

if quantidade_palavras == 1:
	print(f"A sua frase possui {quantidade_palavras} palavra")
else:
	print(f"A sua frase possui {quantidade_palavras} palavras")
