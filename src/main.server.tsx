// @ts-ignore
import express from 'express';
import path from 'path';
import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { SSRStyleCollector, SSRStyleProvider } from 'pu2/style-lib/server';

import { App } from './App';

let manifest: any;
(async () => {
	manifest = __DEV__
		? {
				'main.client.tsx': 'main.client.js'
		  }
		: await import('../client/main.client.manifest.json');
})();

const cssReset = `
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

*,
*::before,
*::after {
	box-sizing: border-box;
}
img {
	display: inline-block;
}
body {
	scroll-behavior: smooth;
	overflow-y: scroll;
	font-family: system-ui,sans-serif;
	/* font-size: 16px; */
	/* line-height: 1rem; */
	min-height: 100vh;
	margin: 0;
	padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
	margin: 0;
}
`;

const renderSSR = ({ appHtml, styleHtml }: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<title>Gregory Dalton</title>
	<style>${cssReset}</style>
	${styleHtml}
	${
		manifest && manifest['main.client.css']
			? `<link href="${manifest['main.client.css']}" rel="stylesheet" />`
			: ''
	}
	<script defer src="${manifest && manifest['main.client.tsx']}"></script>
</head>
<body><div id="root">${appHtml}</div></body>
</html>
`;

const port = 8086;
const server = express();

server.use('/', express.static(path.resolve(__dirname, '../client')));

server.get('*', async (req: any, res: any) => {
	let appHtml = '';
	let styleHtml = '';
	try {
		const collector = new SSRStyleCollector();
		appHtml = renderToString(
			<StrictMode>
				<SSRStyleProvider collector={collector}>
					<StaticRouter location={req.originalUrl}>
						<App />
					</StaticRouter>
				</SSRStyleProvider>
			</StrictMode>
		);
		styleHtml = collector.getHtml();
	} catch (ex) {
		// UNABLE TO SSR
		console.error('UNABLE TO SSR\r\n', ex);
	}
	res.status(200).set({ 'Content-Type': 'text/html' }).end(renderSSR({ appHtml, styleHtml }));
});

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
