import React, { Fragment } from 'react';
import { ScreenSplat } from 'Portfolio/Screen';
import MusicPlayer from 'MusicPlayer';
import { Box, Text } from 'core/primitives';

export default () => {
	return (
		<Fragment>
			<ScreenSplat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
			<ScreenSplat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />
			<Box css={{ position: 'relative' }}>
				<MusicPlayer />
				<Text.Caption>
					Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
				</Text.Caption>
			</Box>

			{/* DIAGONAL LINE BACK */}
			<div
				style={{
					background: 'rgb(97, 95, 107)',
					height: '500px',
					position: 'absolute',
					width: '100%',
					transform: 'translateY(-250px) rotate(-25deg) scaleX(20)',

					top: '0px',
					right: '0px',
					transformOrigin: 'right top'
				}}
			></div>
		</Fragment>
	);
};
