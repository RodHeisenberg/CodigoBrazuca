document.addEventListener('DOMContentLoaded', function() {
	const showInfoButton = document.getElementById('show-info');
	const infoDiv = document.getElementById('info');

	showInfoButton.addEventListener('click', function() {
		if (infoDiv.classList.contains('hidden')) {
			infoDiv.classList.remove('hidden');
			showInfoButton.textContent = 'Ocultar Informações';
		} else {
			infoDiv.classList.add('hidden');
			showInfoButton.textContent = 'Mostrar Informações';
		}
	});
});
