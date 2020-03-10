import React from 'react';
import MusicPlayer from 'MusicPlayer';
import { Screen } from '../Screen';
import { Text } from 'core/primitives';

export default () => {
	return (
		<Screen
			id="fourth"
			link={{
				label: 'Fourth Screen',
				pathname: '/fourth'
			}}
			center
			css={{
				minHeight: '640px',
				height: '100vh',
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
