import React from 'react';
import { Text, Box } from './primitives';
import { space } from './tokens';

export const BodySection = ({ children, title }) => (
	<Box
		css={{
			':not(:last-of-type)': {
				pb: space._8
			}
		}}
	>
		<Text.Section css={{ borderBottom: '2px solid black' }}>{title}</Text.Section>
		<Box css={{ pt: space._5 }}>{children}</Box>
	</Box>
);
