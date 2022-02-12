import React from 'react';
import { Flex } from '../primitives';
import { NavButton } from './NavButton';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import type { NavLink } from './links';

interface NavColumnProps extends BoxProps {
	links: NavLink[];
	onButtonClick?: (link: NavLink) => void;
}

export const NavButtonStack = ({ links, onButtonClick, ...rest }: NavColumnProps) => (
	<Flex flexDirection="column" {...rest}>
		{links.map((link) => (
			<NavButton key={link.to} link={link} onClick={onButtonClick} />
		))}
	</Flex>
);
