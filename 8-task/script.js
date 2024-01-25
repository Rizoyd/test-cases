const fs = require('fs').promises
const os = require('os')

const url = '8-task/assets/file.txt'
;(async url => {
	try {
		const data = await fs.readFile(url)
		const processedData = await data.reverse()
		console.log(processedData)

		await fs.writeFile('8-task/assets/blank.txt', processedData)

		console.log(`Домашняя директория: ${os.homedir()}`)
		console.log(`Тип ОС: ${os.type()}`)
	} catch (err) {
		console.error(err)
	}
})(url)
