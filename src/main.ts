import { createElement, render } from 'preact';
import MainComponent from './MainComponent';

require('./main.scss');

render(createElement(MainComponent, {}), document.body);
