import React from 'react';
import { Text, Box } from './primitives';

export const Skill = ({ name, desc }) => (
	<Box
		css={{
			':not(:first-child)': {
				pt: '16px'
			}
		}}
	>
		<Text.Subtitle>{name}</Text.Subtitle>
		<Text.Caption>{desc}</Text.Caption>
	</Box>
);
