import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to }) => (
	<Box>
		<Flex css={{ alignItems: 'center' }}>
			<Text.Subtitle css={{ textTransform: 'uppercase' }}>{role}</Text.Subtitle>
			<Text.BodyMedium css={{ pl: space._5 }}>{where}</Text.BodyMedium>
		</Flex>
		<Text.Caption css={{ pb: space._4 }}>
			{from} - {to}
		</Text.Caption>
		{children}
	</Box>
);
