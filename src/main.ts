import { createElement, render } from 'preact';
import { App } from './App';

require('./main.scss');

render(createElement(App, {}), document.getElementById('app'));
