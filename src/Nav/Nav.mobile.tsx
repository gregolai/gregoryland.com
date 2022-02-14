import React, { useState } from 'react';
import { Box } from 'pu2/style-lib';
import { Button, Flex, H4, Icon, Span } from '../primitives';
import { Space } from '../theme';
import { GiHamburgerMenu } from 'react-icons/gi';

import { IoIosArrowDown } from 'react-icons/io';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { useLocation } from 'react-router-dom';
import { NavButtons } from './NavButtons';
import { externalLinks, internalLinks } from './links';

export const NavMobile = (props: BoxProps) => {
	const loc = useLocation();
	const [isOpen, setOpen] = useState(false);

	const currentLink = internalLinks.find((link) => link.to === loc.pathname);

	return (
		<Box as="nav" {...props}>
			<Button invert w="100%" b="none" p={Space._5} justifyContent="space-between" onClick={() => setOpen(!isOpen)}>
				<Flex alignItems="center">
					<Icon as={isOpen ? IoIosArrowDown : GiHamburgerMenu} mr={Space._4} />
					<H4 textAlign="center">Gregory Dalton</H4>
				</Flex>

				{currentLink && (
					<Flex alignItems="center">
						<Icon as={currentLink.Icon} mr={Space._4} />
						<Span>{currentLink.label}</Span>
					</Flex>
				)}
			</Button>
			{isOpen && (
				<Flex bb="2px solid black" bg="white">
					<NavButtons
						br="2px solid black"
						flex="1"
						links={internalLinks}
						onButtonClick={() => setOpen(false)}
					/>
					<NavButtons flex="1" links={externalLinks} onButtonClick={() => setOpen(false)} />
				</Flex>
			)}
		</Box>
	);
};
