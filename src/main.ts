import { createElement, render } from 'preact';
import { Root } from './Root';
import TestPage2 from './TestPage2';

require('./main.scss');

render(createElement(TestPage2, {}), document.getElementById('root'));
//render(createElement(TestPage, {}), document.getElementById('root'));
//render(createElement(Root, {}), document.getElementById('root'));

// import { FullscreenFixture, MusicPlayer } from './MusicPlayer';
// render(
// 	createElement(FullscreenFixture, {
// 		children: createElement(MusicPlayer, {})
// 	}),
// 	document.body
// );
