import { createElement, render } from 'preact';
import { Root } from './Root';
import TestPage from './TestPage';

require('./main.scss');

render(createElement(TestPage, {}), document.getElementById('root'));
//render(createElement(Root, {}), document.getElementById('root'));

// import { FullscreenFixture, MusicPlayer } from './MusicPlayer';
// render(
// 	createElement(FullscreenFixture, {
// 		children: createElement(MusicPlayer, {})
// 	}),
// 	document.body
// );
