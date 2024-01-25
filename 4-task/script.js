async function* fetchCards(url) {
	let currentPage = 1
	let totalPages = 0

	do {
		const response = await fetch(`${url}${currentPage}`)
		if (!response.ok) {
			console.error('something wrong')
		}
		const data = await response.json()
		console.log(data)
		totalPages = data.total_pages
		currentPage++
		yield data.data.sort((a, b) => {
			if (a.first_name > b.first_name) {
				return 1
			}
			if (a.first_name < b.first_name) {
				return -1
			}
		})
	} while (currentPage <= totalPages)
}

async function showUsers(users) {
	const container = document.getElementById('cards')
	users.forEach(user => {
		const card = document.createElement('div')
		card.className = 'user-card'
		card.innerHTML = `
            <img src="${user.avatar}" alt="Аватар ${user.first_name}">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>Email: ${user.email}</p>`
		container.appendChild(card)
	})
}

async function showTheNextPage(usersGenerator) {
	try {
		const { value, done } = await usersGenerator.next()
		if (!done) {
			showUsers(value)
			showTheNextPage(usersGenerator)
		}
	} catch (error) {
		console.error(error)
	}
}

const URL = 'https://reqres.in/api/users?page='
const usersGenerator = fetchCards(URL)
showTheNextPage(usersGenerator)
