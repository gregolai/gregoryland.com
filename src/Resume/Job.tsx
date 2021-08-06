import React from 'react';
import { Text, Box, Flex } from './primitives';
import { space } from './tokens';

export const Job = ({ children, where, role, from, to }) => (
	<Box pt={space._2} borderTop="3px solid black">
		<Flex px={space._5} justifyContent="space-between">
			<Box>
				<Text.JobHeader textTransform="uppercase">{role}</Text.JobHeader>
				<Text.BodyMedium>{where}</Text.BodyMedium>
			</Box>

			<Box textAlign="right">
				<Text.JobHeader ml={space._9} pl={space._6}>
					{from} - {to}
				</Text.JobHeader>
			</Box>
		</Flex>
		<Box p={space._5}>{children}</Box>
	</Box>
);
