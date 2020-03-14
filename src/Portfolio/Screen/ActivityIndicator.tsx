import React from 'react';

const css = require('./ActivityIndicator.scss');

export const ActivityIndicator = () => (
	<svg
		viewBox="0 0 128 128"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
		className={css.container}
	>
		<g>
			<path
				d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
				fill="#000000"
				fillOpacity="1"
			/>
		</g>
	</svg>
);
