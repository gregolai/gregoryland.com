const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	const indexFile = path.resolve('./public/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		return res.send(data);
	});
});

app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}`);
});
