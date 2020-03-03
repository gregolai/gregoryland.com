import React, { createContext, useState, useRef, useContext } from 'react';

import MainPanel from './MainPanel';
import { PlaylistPanel } from './PlaylistPanel';
import { Provider, Context } from './MusicPlayerProvider';

const css = require('./MusicPlayer.scss');

const MusicPlayer = () => {
	const { setPlayerRef, knockStyle, knockAt } = useContext(Context);

	return (
		<div ref={setPlayerRef} className={css.container} style={knockStyle}>
			<MainPanel />
			<PlaylistPanel />
		</div>
	);
};

// https://dribbble.com/shots/9651842-Player-app-UI-animation
export default () => {
	return (
		<Provider>
			<MusicPlayer />
		</Provider>
	);
};
