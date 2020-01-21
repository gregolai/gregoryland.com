import { h, createContext } from 'preact';
import { useState } from 'preact/hooks';
import { MainPanel } from './MainPanel';
import { PlaylistPanel } from './PlaylistPanel';
import { Provider } from './MusicPlayerProvider';

const css = require('./MusicPlayer.scss');

// https://dribbble.com/shots/9651842-Player-app-UI-animation
export const MusicPlayer = props => {
	return (
		<Provider>
			<div className={css.container}>
				<MainPanel />
				<PlaylistPanel />
			</div>
		</Provider>
	);
};
