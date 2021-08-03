import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to }) => (
	<Box pt={space._2} borderTop="3px solid black">
		<Flex px={space._5} justifyContent="space-between">
			<Box>
				<Text.Subtitle textTransform="uppercase">{role}</Text.Subtitle>
				<Text.BodyMedium>{where}</Text.BodyMedium>
			</Box>

			<Text.Subtitle ml={space._9} pl={space._6} pb={space._4}>
				{from} - {to}
			</Text.Subtitle>
		</Flex>
		<Box p={space._5}>{children}</Box>
	</Box>
);
