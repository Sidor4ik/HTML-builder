const fs = require('fs');
const path = require('path');
const stream = path.join(__dirname, 'files');
const stream_copy = path.join(__dirname, 'files-copy');
console.log(stream, '\n', stream_copy);


function copyDir() {
	fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
		if (err) throw err;
		console.log('"files-copy" создана');
	});


	fs.readdir(stream_copy, (error, data) => {
		if (error) return console.error(error.message);
		data.forEach(element => {
			fs.unlink(path.join(__dirname, 'files-copy', element), err => {
				if (err) return console.error(err.message);
			});
		});
	});

	fs.readdir(stream, (error, data) => {
		if (error) return console.error(error.message);
		data.forEach(element => {
			fs.copyFile(path.join(__dirname, 'files', element), path.join(__dirname, 'files-copy', element),
				err => {
					if (err) return console.error(err.message);
				});
		});
	});
}
copyDir();
