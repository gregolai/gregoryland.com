import React from 'react';
import { Text, Box, Flex } from './tokens';

export const Job = ({ where, role, from, to, items }) => (
	<Box>
		<Flex css={{ alignItems: 'center' }}>
			<Text.Subtitle css={{ textTransform: 'uppercase' }}>{role}</Text.Subtitle>
			<Text.BodyMedium css={{ paddingLeft: '16px' }}>{where}</Text.BodyMedium>
		</Flex>
		<Text.Caption>
			{from} - {to}
		</Text.Caption>
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					<Text.BodyBookTabular key={index}>{item}</Text.BodyBookTabular>
				</li>
			))}
		</ul>
	</Box>
);
