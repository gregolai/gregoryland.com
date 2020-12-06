import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to }) => (
	<Box borderTop="3px solid black">
		<Box px={space._4}>
			<Flex alignItems="center">
				<Text.Subtitle textAlign="right" textTransform="uppercase">
					{role}
				</Text.Subtitle>
				<Text.Subtitle
					flex="1"
					fontWeight="600"
					ml={space._9}
					pl={space._6}
					textTransform="uppercase"
				>
					{where}
				</Text.Subtitle>
			</Flex>
			<Text.Caption ml={space._9} pl={space._6} pb={space._4}>
				{from} - {to}
			</Text.Caption>
		</Box>
		<Box px={space._4}>{children}</Box>
	</Box>
);
