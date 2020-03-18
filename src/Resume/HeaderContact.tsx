import React from 'react';
import { Text, Flex } from './primitives';
import { space } from './tokens';

export const HeaderContact = ({ label, text }) => (
	<Flex
		css={{
			alignItems: 'center',
			':not(:first-of-type)': {
				pt: space._4
			}
		}}
	>
		<Text.Label css={{ width: '100px', textAlign: 'right' }}>{label}</Text.Label>
		<Text.BodyMedium css={{ pl: space._5 }}>{text}</Text.BodyMedium>
	</Flex>
);
