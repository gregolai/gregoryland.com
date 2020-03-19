import React from 'react';
import { Text, Flex } from './primitives';
import { space } from './tokens';

export const HeaderContact = ({ label, text }) => (
	<Flex
		css={{
			alignItems: 'center',
			justifyContent: 'space-between'
		}}
	>
		<Text.Label>{label}</Text.Label>
		<Text.BodyMedium css={{ textAlign: 'right' }}>{text}</Text.BodyMedium>
	</Flex>
);
