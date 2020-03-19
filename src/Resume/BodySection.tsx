import React from 'react';
import { Text, Box } from './primitives';
import { space } from './tokens';

export const BodySection = ({ children, css = undefined, largeSpace = false, title }) => (
	<Box css={css}>
		{/* <Text.Section css={{ px: largeSpace ? space._8 : space._4, borderBottom: '3px solid black' }}>
			{title}
		</Text.Section> */}
		<Box css={{ px: largeSpace ? space._8 : space._4, pt: space._5, pb: space._6 }}>{children}</Box>
	</Box>
);
