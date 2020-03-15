import React from 'react';
import { Text, Box } from './primitives';
import { space } from './tokens';

export const Skill = ({ name, desc }) => (
	<Box
		css={{
			':not(:first-of-type)': {
				pt: space._5
			}
		}}
	>
		<Text.Subtitle>{name}</Text.Subtitle>
		<Text.Caption>{desc}</Text.Caption>
	</Box>
);
