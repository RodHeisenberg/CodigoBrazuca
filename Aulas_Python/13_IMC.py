altura = float(input("Digite a altura em metros: "))
peso = float(input("Digite o peso em kg: "))

imc = peso / (altura ** 2)
print(f"O seu IMC é de {imc}")
