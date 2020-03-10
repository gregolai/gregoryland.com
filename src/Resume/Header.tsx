import React from 'react';
import { Text, Flex, Box } from './primitives';

const Contact = ({ icon, text }) => (
	<Flex
		css={{
			alignItems: 'center',
			':not(:first-child)': {
				paddingTop: '8px'
			}
		}}
	>
		<img src={icon} style={{ width: '24px', height: '24px' }} />
		<Text.BodyMedium css={{ paddingLeft: '16px' }}>{text}</Text.BodyMedium>
	</Flex>
);

export const Header = ({ name, role, email, phone }) => (
	<Flex css={{ paddingTop: '16px', paddingBottom: '16px' }}>
		<Box css={{ flex: '1' }}>
			<Text.Title style={{ margin: '0' }}>{name}</Text.Title>
			<Text.Subtitle>{role}</Text.Subtitle>
		</Box>
		<Box>
			<Contact icon="static/img/phone-smartphone-apple-iphone-device-mobile-icon.svg" text={phone} />
			<Contact icon="static/img/envelope.svg" text={email} />
		</Box>
	</Flex>
);
