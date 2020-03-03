import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';

import ParallaxTestDemo from './ParallaxTestDemo';

require('./main.scss');

render(createElement(App, {}), document.getElementById('app'));
