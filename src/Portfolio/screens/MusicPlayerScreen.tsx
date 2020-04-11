import React, { Fragment } from 'react';
import { ScreenSplat } from 'Portfolio/Screen';
import MusicPlayer from 'MusicPlayer';
import { Box, Text } from 'core/primitives';

export default () => {
	return (
		<Box css={{ position: 'relative' }}>
			<MusicPlayer />
			<Text.Caption>
				Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
			</Text.Caption>
		</Box>
	);
};
