string = str(input("Digite uma frase/palavra para inverter: "))

string_invertida = ""

for caractere in string:
	string_invertida = caractere + string_invertida

print(f"A sua frase/palavra invertida ficou assim: {string_invertida.capitalize()}")
