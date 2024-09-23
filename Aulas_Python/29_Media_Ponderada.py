notas = []

for nota in range(1,4):
	notas_inseridas = float(input(f"Qual o valor da {nota}ª nota: "))
	notas.append(notas_inseridas)

media_ponderada = ((notas[0] * 2) + (notas[1] * 3) + (notas[2] * 5)) / 10
print(f"Media ponderada das notas: {media_ponderada:.2f}")
