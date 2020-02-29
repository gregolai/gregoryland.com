import { createElement, render } from 'preact';
import App from './App';

import ParallaxTestDemo from './ParallaxTestDemo';

require('./main.scss');

render(createElement(ParallaxTestDemo, {}), document.getElementById('app'));
