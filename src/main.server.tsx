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

const renderSSR = ({ appHtml, styleHtml }: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<title>Gregory Dalton</title>

	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TD3HVV5');</script>
	<!-- End Google Tag Manager -->

	<style>${cssReset}</style>
	${styleHtml}
	<script defer type="text/javascript" src="${manifest['main.client.tsx']}"></script>
</head>
<body>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD3HVV5"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
	
	<div id="root">${appHtml}</div>
</body>
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
