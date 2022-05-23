const fs = require('fs');
const path = require('path');
const stream = path.join(__dirname, 'styles');

fs.readdir(stream, { withFileTypes: true }, (error, data) => {
	if (error) return console.error(error.message);
	let writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'), 'utf-8');
	data.forEach(element => {
		if (element.isFile()) {
			console.log(element);
			fs.stat(path.join(__dirname, 'styles', element.name), (err) => {
				if (err) return console.error(err.message);
				if (path.extname(element.name) === '.css') {
					let readStream = fs.createReadStream(path.join(__dirname, 'styles', element.name), 'utf-8');
					readStream.on('data', partData => writeStream.write(partData));
					readStream.on('error', error => console.log('Ошибка: ', error.message));
				}
			});
		}
	});
});