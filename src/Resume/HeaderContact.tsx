import React from 'react';
import { Text, Flex } from './primitives';

export const HeaderContact = ({ label, text }) => (
	<Flex alignItems="center" justifyContent="space-between">
		<Text.Label>{label}</Text.Label>
		<Text.BodyMedium textAlign="right">{text}</Text.BodyMedium>
	</Flex>
);
