import { h } from 'preact';
import { Screen, ScreenSplat } from 'Portfolio/Screen';

import { Text } from '../../Resume/tokens';
import Resume from 'Resume';

export default () => {
	return (
		<Screen
			id="resume"
			label="Resume"
			style={{
				paddingTop: 100,
				paddingBottom: 100
				// height: 800
			}}
		>
			<Resume style={{ zIndex: 1, width: '80%' }} />

			{/* DIAGONAL LINE */}
			<div
				style={{
					background: 'black',
					height: '500px',
					position: 'absolute',
					top: '600px',
					left: '0px',
					width: '100%',
					transform: 'rotate(25deg) scaleX(20)'
				}}
			></div>
		</Screen>
	);
};
