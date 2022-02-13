import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import { externalLinks, internalLinks } from './links';
import { NavButtons } from './NavButtons';
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
			overflow="scroll"
			{...props}
		>
			<Box flex="1">
				<H1 px={Space._6} py={Space._3}>
					Gregory Dalton
				</H1>
				<NavButtons links={internalLinks} />
			</Box>
			<NavButtons links={externalLinks} />
		</Flex>
	);
};
