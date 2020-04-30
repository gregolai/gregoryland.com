import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';

const ua = window.navigator.userAgent;
if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 /* || ua.indexOf('Edge/') > 0*/) {
	window.location.href = 'https://www.google.com/chrome/';
} else {
	render(createElement(App), document.getElementById('app'));
}
