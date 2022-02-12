import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import { externalLinks, internalLinks } from './links';
import { NavButtonStack } from './NavButtonStack';
import { Flex, H1 } from '../primitives';
import { Space } from '../theme';

export const NavDesktop = (props: BoxProps) => {
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
				<H1 px={Space._6} py={Space._3}>
					Gregory Dalton
				</H1>
				<NavButtonStack links={internalLinks} />
			</Box>
			<NavButtonStack links={externalLinks} />
		</Flex>
	);
};
