let timer

const debounceToggle = btn => {
	btn.addEventListener('click', function (e) {
		clearTimeout(timer)

		timer = setTimeout(() => {
			console.log(e.target)
			document.querySelectorAll('.debounce').forEach(item => {
				item.classList.toggle('active')
			})
		}, 1000)
	})
}

debounceToggle(document.getElementById('btn'))
