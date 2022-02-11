import React from 'react';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import type { IconType } from 'react-icons';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { ExternalLinkButton, IconText, InternalLinkButton } from '../primitives';
import type { NavLink } from './links';

interface NavButtonProps extends BoxProps<typeof InternalLinkButton | typeof ExternalLinkButton> {
	link: NavLink;
}

export const NavButton = ({ link, ...rest }: NavButtonProps) => {
	const Comp = link.to[0] === '/' ? InternalLinkButton : ExternalLinkButton;
	return (
		<Comp
			{...rest}
			to={link.to}
			b="none"
			bb="2px solid black"
			flex="1"
			css={{
				':last-of-type': { bb: 'none' }
			}}
		>
			<IconText Icon={link.Icon} IconRight={link.newTab && HiOutlineExternalLink}>
				{link.label}
			</IconText>
		</Comp>
	);
};
