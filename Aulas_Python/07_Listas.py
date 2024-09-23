lista_de_compras = []

while True:
	item = input("Digite um item para adicionar à lista de compras (ou 'sair' para finalizar): ")
	if item.lower() == "sair":
		break
	lista_de_compras.append(item)

print("\nLista de compras:")
for item in lista_de_compras:
	print(f"- {item}")
