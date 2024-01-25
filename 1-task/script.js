const arrOfPictures = [
	'https://avatars.dzeninfra.ru/get-zen_doc/9847946/pub_64b4fbf6e2f6aa68321168b3_64b4fc3123bec546cb0ad94b/scale_2400',
	'https://cs12.pikabu.ru/post_img/big/2021/04/26/4/161941058717981152.png',
	'https://cs14.pikabu.ru/post_img/2021/05/07/6/1620374577165113064.png',
]

class Slide {
	constructor(arr) {
		this.sources = arr
		this.currSlide = 0
		this.init()
	}

	init() {
		this.createSlide()
		this.render()
		this.addEventListeners()
	}

	createSlide() {
		this.img = document.createElement('img')
		this.btnNext = document.createElement('button')
		this.btnPrevious = document.createElement('button')
		this.container = document.querySelector('.container')
		this.slideContainer = document.createElement('div')
		this.slideContainer.className = 'slide-container'

		this.btnPrevious.className = 'slide-button left'
		this.btnNext.className = 'slide-button right'

		this.container.classList = 'container'
		this.img.src = this.sources[0]

		this.slideContainer.appendChild(this.btnPrevious)
		this.slideContainer.appendChild(this.img)
		this.slideContainer.appendChild(this.btnNext)
	}

	render() {
		this.container.appendChild(this.slideContainer)
	}

	addEventListeners() {
		this.btnNext.addEventListener('click', e => {
			if (this.currSlide < this.sources.length - 1) {
				this.currSlide++
				this.img.src = this.sources[this.currSlide]
			}
		})

		this.btnPrevious.addEventListener('click', e => {
			if (this.currSlide > 0) {
				--this.currSlide
				this.img.src = this.sources[this.currSlide]
			}
		})
	}
}

const newSlider = new Slide(arrOfPictures)
