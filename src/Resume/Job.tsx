import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to }) => (
	<Box css={{ borderTop: '3px solid black' }}>
		<Box css={{ px: space._4 }}>
			<Flex css={{ alignItems: 'center' }}>
				<Text.Subtitle
					css={{
						textTransform: 'uppercase',
						textAlign: 'right'
					}}
				>
					{role}
				</Text.Subtitle>
				<Text.Subtitle
					css={{
						ml: space._9,
						pl: space._6,
						flex: '1',
						fontWeight: '600',
						textTransform: 'uppercase'
					}}
				>
					{where}
				</Text.Subtitle>
			</Flex>
			<Text.Caption css={{ ml: space._9, pl: space._6, pb: space._4 }}>
				{from} - {to}
			</Text.Caption>
		</Box>

		<Box css={{ px: space._4 }}>{children}</Box>
	</Box>
);
