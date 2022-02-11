import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { externalLinks, internalLinks } from './links';
import { NavButtonStack } from './NavButtonStack';
import { Flex, H3 } from '../primitives';

export const NavDesktop = (props: BoxProps) => {
	const loc = useLocation();
	return (
		<Flex
			as="nav"
			position="fixed"
			flexDirection="column"
			justifyContent="space-between"
			w="240px"
			h="100vh"
			bg="white"
			{...props}
		>
			<Box flex="1">
				<H3>Gregory Dalton</H3>
				<NavButtonStack links={internalLinks} />
			</Box>
			<NavButtonStack links={externalLinks} />
		</Flex>
	);
};
