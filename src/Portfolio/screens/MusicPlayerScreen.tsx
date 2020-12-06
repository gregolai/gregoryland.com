import React, { Fragment } from 'react';
import { ScreenSplat } from 'Portfolio/Screen';
import MusicPlayer from 'MusicPlayer';
import { Box, Text } from 'core/primitives';
import { space } from 'core/tokens';

export default () => {
	return (
		<Box>
			<MusicPlayer />
			<Text.Caption pt={space._4} textAlign="center">
				Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
			</Text.Caption>
		</Box>
	);
};
