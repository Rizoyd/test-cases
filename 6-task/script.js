function showError(fieldId, message) {
	const error = document.createElement('div')
	error.className = 'error'
	error.innerHTML = message
	const field = document.getElementById(fieldId)

	field.parentNode.insertBefore(error, field.nextSibling)
}

const btn = document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault()
	console.log(e.target)

	const name = document.getElementById('name').value
	if (!/^[а-яА-ЯёЁa-zA-Z]{3,30}$/.test(name)) {
		showError(
			'name',
			'Имя должно содержать от 3 до 30 символов и состоять только из букв'
		)
	}

	const phone = document.getElementById('phone').value
	if (!/^\+?\d{10,15}$/.test(phone)) {
		showError(
			'phone',
			'Телефон должен содержать от 10 до 15 цифр и может начинаться с плюса'
		)
	}
	const password = document.getElementById('password').value
	if (!/(?=.*\d)(?=.*[A-Z]).{8,40}/.test(password)) {
		showError(
			'password',
			'Пароль должен быть от 8 до 40 символов и хотя бы содержать одну цифру и заглавную букву'
		)
	}

	const passwordConfirm = document.getElementById('confirm').value
	if (password !== passwordConfirm) {
		showError('confirm', 'Пароли не совпадают')
	}
})
