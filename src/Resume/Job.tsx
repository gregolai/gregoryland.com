import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to, css = {} }) => (
	<Box css={{ pt: space._6, ...css }}>
		<Box>
			<Flex css={{ alignItems: 'center' }}>
				<Text.Subtitle
					css={{
						color: 'transparent',
						// firefox
						mozTextStrokeWidth: '1px',
						mozTextStrokeColor: 'black',

						// chrome/safari
						webkitTextStrokeWidth: '1px',
						webkitTextStrokeColor: 'black',

						textTransform: 'uppercase',

						fontSize: '32px',
						lineHeight: '32px',
						letterSpacing: '2px'
					}}
				>
					{role}
				</Text.Subtitle>

				<Text.Subtitle
					css={{ flex: '1', textAlign: 'right', fontWeight: '500', textTransform: 'uppercase' }}
				>
					{where}
				</Text.Subtitle>
			</Flex>
			<Text.Caption css={{ textAlign: 'right', pb: space._4 }}>
				{from} - {to}
			</Text.Caption>
		</Box>
		{children}
	</Box>
);
