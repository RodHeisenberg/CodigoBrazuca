document.addEventListener('DOMContentLoaded', function() {
	const descriptionInput = document.getElementById('expense-description');
	const amountInput = document.getElementById('expense-amount');
	const addExpenseButton = document.getElementById('add-expense');
	const expenseList = document.getElementById('expense-list');
	const totalAmountElement = document.getElementById('total-amount');

	let totalAmount = 0;

	addExpenseButton.addEventListener('click', function() {
		const description = descriptionInput.value.trim();
		const amount = parseFloat(amountInput.value);

		if (description === '' || isNaN(amount) || amount <= 0) {
			alert('Por favor, insira uma descrição válida e um valor maior que zero.');
			return;
		}

		const listItem = document.createElement('li');
		listItem.textContent = `${description}: R$ ${amount.toFixed(2)}`;

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Excluir';
		deleteButton.className = 'delete';
		deleteButton.addEventListener('click', function() {
			expenseList.removeChild(listItem);
			totalAmount -= amount;
			totalAmountElement.textContent = `R$ ${totalAmount.toFixed(2)}`;
		});

		listItem.appendChild(deleteButton);
		expenseList.appendChild(listItem);

		totalAmount += amount;
		totalAmountElement.textContent = `R$ ${totalAmount.toFixed(2)}`;

		descriptionInput.value = '';
		amountInput.value = '';
	});
});
