import { createElement, render } from 'preact';
import { Root } from './Root';

require('./main.scss');

render(createElement(Root, {}), document.getElementById('root'));

// import { FullscreenFixture, MusicPlayer } from './MusicPlayer';
// render(
// 	createElement(FullscreenFixture, {
// 		children: createElement(MusicPlayer, {})
// 	}),
// 	document.body
// );
