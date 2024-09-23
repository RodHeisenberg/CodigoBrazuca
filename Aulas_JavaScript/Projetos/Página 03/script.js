document.addEventListener('DOMContentLoaded', function () {
	const lengthInput = document.getElementById('password-length');
	const includeNumbers = document.getElementById('include-numbers');
	const includeSymbols = document.getElementById('include-symbols');
	const includeUppercase = document.getElementById('include-uppercase');
	const generateButton = document.getElementById('generate-password');
	const passwordDisplay = document.getElementById('password-display');

	generateButton.addEventListener('click', function () {
		const length = parseInt(lengthInput.value);
		const hasNumbers = includeNumbers.checked;
		const hasSymbols = includeSymbols.checked;
		const hasUppercase = includeUppercase.checked;

		const password = generatePassword(length, hasNumbers, hasSymbols, hasUppercase);
		passwordDisplay.textContent = password;
	});

	function generatePassword(length, hasNumbers, hasSymbols, hasUppercase) {
		const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
		const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numberChars = '0123456789';
		const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

		let characterSet = lowercaseChars;
		if (hasNumbers) {
			characterSet += numberChars;
		}
		if (hasSymbols) {
			characterSet += symbolChars;
		}
		if (hasUppercase) {
			characterSet += uppercaseChars;
		}

		let password = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characterSet.length);
			password += characterSet[randomIndex];
		}

		return password;
	}
});
