//Уважаемый проверяющий, мне чуть не хватило время докрутить 6ую задачку.. Буду Благодарен, если вы проверите мою работу в среду или четверг - спасибо большое!)
const fs = require('fs');
const path = require('path');
const roadStyles = path.join(__dirname, 'styles');
const roadComponents = path.join(__dirname, 'components');
const roadProjectDist = path.join(__dirname, 'project-dist');
const roadIndex = path.join(roadProjectDist, 'index.html');
const roadAssets = path.join(__dirname, 'assets');

let template = fs.createReadStream(path.join(__dirname, 'template.html'), 'utf-8');

fs.mkdir(roadProjectDist, { recursive: true }, err => {
	if (err) throw err;
	console.log('"project-dist" создана');
});


