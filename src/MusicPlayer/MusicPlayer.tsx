import React, { useContext } from 'react';

import MainPanel from './MainPanel';
import { PlaylistPanel } from './PlaylistPanel';
import { Provider, Context } from './MusicPlayerProvider';
import { Box } from 'core/primitives';

const MusicPlayer = () => {
	const { setPlayerRef, knockStyle, knockAt } = useContext(Context);

	return (
		<Box
			ref={setPlayerRef}
			css={{
				position: 'relative',
				width: '246px',
				height: '532px',
				borderRadius: '16px',
				overflow: 'hidden',
				userSelect: 'none'
			}}
			style={knockStyle}
		>
			<MainPanel />
			<PlaylistPanel />
		</Box>
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
