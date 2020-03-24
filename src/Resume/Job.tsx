import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to, css = {} }) => (
	<Box css={{ pt: space._6, minHeight: '220px', ...css }}>
		<Box>
			<Flex css={{ alignItems: 'center' }}>
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
		<Flex css={{ position: 'relative' }}>
			<Text.Subtitle
				css={{
					position: 'absolute',
					left: '0px',
					top: '-48px',
					transform: 'rotate(-90deg) translateX(-100%)',
					transformOrigin: 'top left',

					// color: 'transparent',
					// // firefox
					// mozTextStrokeWidth: '1px',
					// mozTextStrokeColor: 'black',

					// // chrome/safari
					// webkitTextStrokeWidth: '1px',
					// webkitTextStrokeColor: 'black',

					textTransform: 'uppercase',

					textAlign: 'right',

					//fontSize: '32px',
					//lineHeight: '32px',

					fontSize: '28px',
					lineHeight: '28px',
					width: '190px',

					borderBottom: '6px solid black'
				}}
			>
				{role}
			</Text.Subtitle>

			<Box css={{ ml: space._9, pl: space._6 }}>{children}</Box>
		</Flex>
	</Box>
);
