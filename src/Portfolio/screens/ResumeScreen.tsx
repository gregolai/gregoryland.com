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
			<Resume style={{ width: '80%' }} />
		</Screen>
	);
};
