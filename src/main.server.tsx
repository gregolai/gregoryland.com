import express from 'express';
import path from 'path';
import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { SSRStyleCollector, SSRStyleProvider } from 'pu2/style-lib/server';

import manifest from '../client/main.client.manifest.json';

import { App } from './App';

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

const renderPanelbear = () =>
	__DEV__
		? ''
		: `
	<!-- Panelbear -->
	<script async src="https://cdn.panelbear.com/analytics.js?site=DUjjzlAXTGz"></script>
	<script>
		window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
		panelbear('config', {
			site: 'DUjjzlAXTGz',
			spaMode: 'history',
			debug: ${__DEV__ ? 'true' : 'false'}
		});
	</script>
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
	<script defer type="text/javascript" src="${manifest['main.client.tsx']}"></script>
	${renderPanelbear()}
</head>
<body><div id="root">${appHtml}</div></body>
</html>
`;

// @ts-ignore
const port = 8086;
const server = express();

server.use('/projects/snek', express.static(path.resolve(__dirname, '../projects/snek')));
server.use(
	'/projects/vimeo-player',
	express.static(path.resolve(__dirname, '../projects/vimeo-player/public'))
);
server.use('/projects/warnew', express.static(path.resolve(__dirname, '../projects/warnew')));
server.use('/projects/starfield-js', express.static(path.resolve(__dirname, '../projects/starfield-js')));
server.use('/projects/masking', express.static(path.resolve(__dirname, '../projects/masking')));

server.use('/', express.static(path.resolve(__dirname, '../client')));

// CACHE RENDERS OF PAGE
const SSR_USE_CACHE = !__DEV__;
// MAP FULL RENDERED SSR BY REQ URL
const SSR_CACHED = new Map<string, string>();

server.get('*', async (req, res) => {
	const location = req.originalUrl;

	let fullHtml: string = '';

	if (SSR_USE_CACHE && SSR_CACHED.has(location)) {
		fullHtml = SSR_CACHED.get(location) as string;
	} else {
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

		fullHtml = renderSSR({ appHtml, styleHtml });

		if (SSR_USE_CACHE) {
			SSR_CACHED.set(location, fullHtml);
		}
	}

	res.status(200);
	res.setHeader('Content-Type', 'text/html');
	res.end(fullHtml);
});

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
