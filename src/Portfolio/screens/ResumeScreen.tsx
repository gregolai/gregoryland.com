import React, { Fragment } from 'react';
import { ScreenSplat } from 'Portfolio/Screen';

import Resume from 'Resume';
import { useApp } from 'App';

export default () => {
	const { printResume } = useApp();

	return (
		<Fragment>
			<button style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }} onClick={printResume}>
				Print My Resume
			</button>

			<Resume css={{ zIndex: '1', width: '80%', minWidth: '800px', maxWidth: '1000px' }} />
		</Fragment>
	);
};
