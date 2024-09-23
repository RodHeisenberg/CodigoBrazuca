// Seleção de elementos do DOM
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const websiteInput = document.getElementById('website');
const userList = document.getElementById('userList');
const loadUsersButton = document.getElementById('loadUsers');

// Evento de submissão do formulário
userForm.addEventListener('submit', function (event) {
	event.preventDefault(); // Previne a submissão padrão do formulário

	// Captura dos valores dos campos
	const name = nameInput.value.trim();
	const email = emailInput.value.trim();
	const website = websiteInput.value.trim();

	// Validação básica
	if (!name || !email) {
		alert('Nome e email são obrigatórios!');
		return;
	}

	// Adiciona o usuário à lista
	const userCard = document.createElement('div');
	userCard.className = 'user-card';
	userCard.innerHTML = `
    <h3>${name}</h3>
    <p>Email: ${email}</p>
    <p>Website: <a href="${website}" target="_blank">${website}</a></p>
  `;
	userList.appendChild(userCard);

	// Limpar campos do formulário
	nameInput.value = '';
	emailInput.value = '';
	websiteInput.value = '';

	alert('Usuário adicionado com sucesso!');
});

// Evento de clique para carregar usuários
loadUsersButton.addEventListener('click', function () {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			userList.innerHTML = ''; // Limpa a lista antes de adicionar novos usuários
			users.forEach(user => {
				const userCard = document.createElement('div');
				userCard.className = 'user-card';
				userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
				userList.appendChild(userCard);
			});
		})
		.catch(error => console.error('Erro ao carregar usuários:', error));
});
