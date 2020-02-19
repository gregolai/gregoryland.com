import { h, createContext } from 'preact';
import { useState, useRef, useContext } from 'preact/hooks';
import MainPanel from './MainPanel';
import { PlaylistPanel } from './PlaylistPanel';
import { Provider, Context } from './MusicPlayerProvider';

const css = require('./MusicPlayer.scss');

const Inner = () => {
	const { setPlayerRef, knockStyle, knockAt } = useContext(Context);

	return (
		<div ref={setPlayerRef} className={css.container} style={knockStyle}>
			<MainPanel />
			<PlaylistPanel />
		</div>
	);
};

// https://dribbble.com/shots/9651842-Player-app-UI-animation
export const MusicPlayer = props => {
	return (
		<Provider>
			<Inner />
		</Provider>
	);
};
