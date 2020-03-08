import React from 'react';
import MusicPlayer from 'MusicPlayer';
import { Screen } from '../Screen';
import { Text } from 'primitives';

export default () => {
	return (
		<Screen
			id="fourth"
			label="Fourth Screen"
			center
			css={{
				height: '1200px',
				background: 'green'
			}}
		>
			<MusicPlayer />
			<Text.Caption>
				Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
			</Text.Caption>
		</Screen>
	);
};
