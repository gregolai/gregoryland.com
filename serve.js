const path = require('path');
const fs = require('fs');
const express = require('express');
const { render } = require('./public/js/main');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = express();

app.get('/', (req, res) => {
	const reactString = ReactDOMServer.renderToString(React.createElement(App));
	const indexFile = path.resolve('./public/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		data = data.replace('<div id="app" />', `<div id="app">${reactString}</div>`);
		return res.send(data);
	});
});

app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}`);
});
