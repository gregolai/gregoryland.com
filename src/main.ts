import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';

import ParallaxTestDemo from './ParallaxTestDemo';

require('./main.scss');

const ua = window.navigator.userAgent;
if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 /* || ua.indexOf('Edge/') > 0*/) {
	const el = document.createElement('b');
	el.innerText = 'IE bad.';
	document.body.appendChild(el);
	setTimeout(() => (window.location.href = 'https://www.google.com/chrome/'), 1000);
} else {
	render(createElement(App, {}), document.getElementById('app'));
}
