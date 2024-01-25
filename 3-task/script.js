document.addEventListener('DOMContentLoaded', () => {
	const video = document.getElementById('player')
	const videoTime = document.getElementById('time')

	video.addEventListener('click', () => {
		if (video.paused) {
			video.play()
		} else {
			video.pause()
		}
	})

	video.addEventListener('timeupdate', () => {
		console.log(video.currentTime)
		let minutes = Math.floor(video.currentTime / 60)
			.toString()
			.padStart(2, '0')
		let seconds = Math.floor(video.currentTime).toString().padStart(2, '0')
		let milliseconds = Math.floor(
			(video.currentTime - Math.floor(video.currentTime)) * 1000
		)
			.toString()
			.padStart(3, '0 ')
		videoTime.textContent = `${minutes}:${seconds}:${milliseconds}`
	})

	video.addEventListener('ended', () => {
		video.currentTime = 0
		video.play()
	})
})
