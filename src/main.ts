import { createElement, render } from 'preact';
import MainComponent from './MainComponent';

require('./main.scss');

// render(createElement(MainComponent, {}), document.body);

import { FullscreenFixture, MusicPlayer } from './MusicPlayer';
render(
	createElement(FullscreenFixture, {
		children: createElement(MusicPlayer, {})
	}),
	document.body
);
