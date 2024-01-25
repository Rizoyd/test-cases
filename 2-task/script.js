document.querySelector('.container').addEventListener('click', e => {
	console.log(e.target)
	console.log(e.currentTarget)
	if (
		e.target.classList.contains('square') ||
		e.target.classList.contains('circle') ||
		e.target.classList.contains('rectangle') ||
		e.target.classList.contains('triagngle')
	) {
		e.target.classList.toggle('animated')
	}
})
