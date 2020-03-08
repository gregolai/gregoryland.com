import React from 'react';
import { Screen, ScreenSplat } from 'Portfolio/Screen';

import { Text } from '../../Resume/tokens';
import Resume from 'Resume';

export default () => {
	return (
		<Screen
			id="resume"
			label="Resume"
			center
			css={{
				paddingTop: '100px',
				paddingBottom: '100px'
			}}
		>
			<Resume style={{ zIndex: 1, width: '80%' }} />

			{/* DIAGONAL LINE */}
			<div
				style={{
					background: 'black',
					height: '500px',
					position: 'absolute',
					width: '100%',
					transform: 'translateY(250px) rotate(25deg) scaleX(20)',

					right: '0px',
					bottom: '0px',
					transformOrigin: 'right top'
				}}
			></div>
		</Screen>
	);
};
