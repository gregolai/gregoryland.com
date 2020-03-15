import React from 'react';
import { Text, Flex } from './primitives';
import { space } from './tokens';

export const HeaderContact = ({ icon, text }) => (
	<Flex
		css={{
			alignItems: 'center',
			':not(:first-of-type)': {
				pt: space._4
			}
		}}
	>
		<img src={icon} style={{ width: '24px', height: '24px' }} />
		<Text.BodyMedium css={{ pl: space._5 }}>{text}</Text.BodyMedium>
	</Flex>
);
