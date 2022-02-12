import React from 'react';
import { Space } from '../theme';
import { Icon, LinkButton, Span } from '../primitives';
import type { NavLink } from './links';
import { useLocation } from 'react-router-dom';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

interface NavButtonProps {
	link: NavLink;
}

export const NavButton = ({ link }: NavButtonProps) => {
	const loc = useLocation();
	const isActive = loc.pathname === link.to;

	let extraProps: BoxProps = {};
	if (isActive) {
		extraProps.bg = 'black';
		extraProps.color = 'white';
	}

	return (
		<LinkButton newTab={link.newTab} to={link.to} b="none" {...extraProps}>
			{link.Icon && <Icon as={link.Icon} mr={Space._5} />}
			<Span>{link.label}</Span>
		</LinkButton>
	);
};
