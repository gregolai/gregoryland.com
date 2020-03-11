import React from 'react';
import { Screen, ScreenSplat } from 'Portfolio/Screen';

import Resume from 'Resume';
import { space } from 'core/tokens';

export default () => {
	return (
		<Screen
			id="resume"
			link={{
				label: 'Resume',
				pathname: '/resume'
			}}
			center
			css={{
				py: space._7
			}}
		>
			<Resume css={{ zIndex: '1', width: '80%', maxWidth: '1000px' }} />

			<ScreenSplat color="rgba(255,255,255,0.5)" width="1800px" x="200px" y="600px" colorPos="20%" />

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
