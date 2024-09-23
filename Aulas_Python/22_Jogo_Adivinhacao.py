import random

numero_secreto = random.randint(1, 100)

tentativas = 10
while tentativas > 0:
	numero = int(input("Digite um número entre 1 e 100: "))
	tentativas += 1
	if numero == numero_secreto:
		print("\U0001f386 \U0001f38a Você acertou! \U0001f38a \U0001f386")
		break
	elif numero > numero_secreto:
		print("Tente novamente! O número secreto é menor \U0001f447.")
	elif numero < numero_secreto:
		print("Tente novamente! O número secreto é maior \U0001f446.")

	if tentativas == 5:
		print("Você já gastou 5 tentativas.")
	if tentativas == 0:
		print("Você perdeu!")
		break
