frase = input("Digite uma frase: ")
letra = input("Digite uma letra que deseja contar: ")

quantidade_letras = frase.count(letra)

print(f"A letra '{letra.upper()}' aparece {quantidade_letras} vezes na frase '{frase}'.")
