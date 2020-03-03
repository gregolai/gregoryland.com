import React from 'react';
import MusicPlayer from 'MusicPlayer';
import { Screen } from '../Screen';
import { Text } from '../../Resume/tokens';

export default () => {
	return (
		<Screen
			id="fourth"
			label="Fourth Screen"
			style={{
				height: 1200,
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
