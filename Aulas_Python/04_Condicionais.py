temperatura = float(input("Qual é a temperatura atual em °C? "))

if temperatura > 30:
	print("A temperatura está quente! \U0001f975")
elif 30 >= temperatura >= 15:
	print("A temperatura está agradável! \U0001f60e")
else:
	print("A temperatura está fria! \U0001f976")
