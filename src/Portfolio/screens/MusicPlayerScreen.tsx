import React from 'react';
import { Screen, ScreenSplat } from 'Portfolio/Screen';
import MusicPlayer from 'MusicPlayer';
import { Text } from '../../Resume/tokens';

export default () => {
	return (
		<Screen
			id="second"
			label="Music Player"
			style={{
				height: 800,
				background:
					'linear-gradient(transparent 0%, rgba(175, 204, 232, 0.5) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(181, 175, 233, 0.3) 0%, transparent 350px)'
			}}
		>
			<ScreenSplat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
			<ScreenSplat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />
			<div style={{ position: 'relative' }}>
				<MusicPlayer />
				<Text.Caption>
					Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
				</Text.Caption>
			</div>
		</Screen>
	);
};
