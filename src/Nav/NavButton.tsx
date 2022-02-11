import React from 'react';
import { Space } from '../theme';
import { Icon, LinkButton, Span } from '../primitives2';
import type { NavLink } from './links';

interface NavButtonProps {
	link: NavLink;
}

export const NavButton = ({ link }: NavButtonProps) => {
	return (
		<LinkButton newTab={link.newTab} to={link.to} b="none">
			{link.Icon && <Icon as={link.Icon} mr={Space._5} />}
			<Span>{link.label}</Span>
		</LinkButton>
	);
};
