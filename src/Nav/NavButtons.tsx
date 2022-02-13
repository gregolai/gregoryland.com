import React from 'react';
import { useLocation } from 'react-router-dom';
import { Flex, Icon, LinkButton, Span } from '../primitives';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import type { NavLink } from './links';
import { Space } from '../theme';

interface NavButtonProps {
	link: NavLink;
	onClick?: (link: NavLink) => void;
}

const NavButton = ({ link, onClick }: NavButtonProps) => {
	const loc = useLocation();
	const isActive = loc.pathname === link.to;

	let extraProps: BoxProps = {};
	if (isActive) {
		extraProps.bg = 'black';
		extraProps.color = 'white';
	}

	return (
		<LinkButton newTab={link.newTab} to={link.to} b="none" onClick={onClick} {...extraProps}>
			{link.Icon && <Icon as={link.Icon} mr={Space._5} />}
			<Span>{link.label}</Span>
		</LinkButton>
	);
};

interface NavButtonsProps extends BoxProps {
	links: NavLink[];
	onButtonClick?: (link: NavLink) => void;
}

export const NavButtons = ({ links, onButtonClick, ...rest }: NavButtonsProps) => (
	<Flex flexDirection="column" {...rest}>
		{links.map((link) => (
			<NavButton key={link.to} link={link} onClick={onButtonClick} />
		))}
	</Flex>
);
