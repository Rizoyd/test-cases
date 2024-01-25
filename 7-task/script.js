const randomizeSquare = () => {
	const root = document.querySelector('.squares')
	root.innerHTML = ''

	const randomNum = optional => {
		if (!optional) {
			return Math.floor(Math.random() * 256)
		}
		return Math.floor(Math.random() * 100) + 20
	}

	const count = randomNum(true)
	for (let i = 0; i < count; i++) {
		const div = document.createElement('div')
		div.style.width = '100px'
		div.style.height = '100px'
		div.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
		root.appendChild(div)
	}
}

document.getElementById('btn').addEventListener('click', randomizeSquare)
