const path = require('path');
const fs = require('fs');
const fps = require('fs/promises');
const express = require('express');

// const reactDOMServer = require('react-dom/server');
// const { StaticRouter } = require('react-router-dom/server');
// const { App } = require('src/App');

const root = process.cwd();
const isProduction = process.env.NODE_ENV === 'production';

const resolve = (p) => path.resolve(__dirname, p);

async function createServer() {
	const app = express();
	/**
	 * @type {import('vite').ViteDevServer}
	 */
	let vite;

	if (!isProduction) {
		vite = await require('vite').createServer({
			root,
			server: { middlewareMode: 'ssr' }
		});
		app.use(vite.middlewares);
	} else {
		app.use(require('compression')());
	}

	app.get('/', async (req, res) => {
		const url = req.originalUrl;
		try {
			let template;
			let render;

			if (!isProduction) {
				template = await fps.readFile(resolve('index.html'), 'utf-8');
				template = await vite.transformIndexHtml(url, template);
				render = await vite.ssrLoadModule('src/entry.server.tsx').then((m) => m.render);
			} else {
				template = await fps.readFile(resolve('dist/client/index.html'), 'utf-8');
				render = require(resolve('dist/server/entry.server.js')).render;
			}

			let html = template.replace('<!--app-html-->', render(url));

			res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
		} catch (error) {
			if (!isProduction) {
				vite.ssrFixStacktrace(error);
			}
			console.log(error.stack);
			res.status(500).end(error.stack);
		}
	});

	if (isProduction) {
		app.use(express.static(resolve('dist/client')));
	}

	return app;
}

createServer().then((app) => {
	const PORT = process.env.PORT || 8086;
	app.listen(PORT, () => {
		console.log(`${process.env.NODE_ENV} running at http://localhost:${PORT}`);
	});
});

// const app = express();

// // const indexFile = path.resolve('./public/index.html');
// // fs.readFileSync(indexFile);

// app.get('/', (req, res) => {
// 	const html = reactDOMServer.renderToString(
// 		React.createElement(StaticRouter, { location: req.url }, React.createElement(App))
// 	);
// 	res.send(`<!DOCTYPE html>${html}`);
// });

// app.use(express.static('./public'));

// app.listen(process.env.PORT, () => {
// 	console.log(`http://localhost:${process.env.PORT}`);
// });
