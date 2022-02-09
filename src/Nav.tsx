import React, { useContext, useState } from 'react';
import { Box } from 'pu2/style-lib';
import type { IconType } from 'react-icons';
import { Button, ExternalLinkButton, Flex, H2, IconText, InternalLinkButton } from './primitives';
import { Space } from './theme';
import { AiFillGithub, AiFillHome, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { GiComputerFan, GiEnergyBreath, GiHamburgerMenu } from 'react-icons/gi';
import { HiExternalLink } from 'react-icons/hi';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { useLocation } from 'react-router-dom';

const ButtonColumn = ({ children, ...rest }: any) => (
	<Flex flexDirection="column" flex="1" {...rest}>
		{children}
	</Flex>
);

interface HeaderButtonProps {
	children: React.ReactNode;
	Icon?: IconType;
	newTab?: boolean;
	to?: string;
}

const NavContext = React.createContext({ isOpen: false, setOpen: (v: boolean) => {} });

const internalLinks = [
	{
		label: 'Home',
		to: '/',
		Icon: AiFillHome
	},
	{
		label: 'Career',
		to: '/career',
		Icon: BiBuildings
	},
	{
		label: 'Projects',
		to: '/projects',
		Icon: GiComputerFan
	},
	{
		label: 'Life',
		to: '/life',
		Icon: GiEnergyBreath
	}
];

const externalLinks = [
	{
		label: 'Github',
		to: 'https://github.com/gregolai',
		Icon: AiFillGithub
	},
	{
		label: 'Linkedin',
		to: 'https://linkedin.com/in/gregolai',
		Icon: AiFillLinkedin
	},
	{
		label: 'IG',
		to: 'https://instagram.com/gregolai',
		Icon: AiFillInstagram
	}
];

const NavButton = ({ children, Icon, ...rest }) => {
	const loc = useLocation();

	const { setOpen } = useContext(NavContext);
	const Comp = rest.to[0] === '/' ? InternalLinkButton : ExternalLinkButton;
	return (
		<Comp
			{...rest}
			b="none"
			bb="2px solid black"
			flex="1"
			css={{
				':last-of-type': { bb: 'none' }
				// ':not(:first-of-type)': { bl: 'none' }
			}}
			onClick={() => setOpen(false)}
		>
			<IconText Icon={Icon}>{children}</IconText>
		</Comp>
	);
};

export const Nav = (props: BoxProps) => {
	const loc = useLocation();
	const [isOpen, setOpen] = useState(false);

	const currentLink = internalLinks.find((link) => link.to === loc.pathname);

	return (
		<NavContext.Provider value={{ isOpen, setOpen }}>
			<Box as="nav" {...props}>
				<Button
					to="/"
					py={Space._6}
					display="flex"
					justifyContent="space-between"
					onClick={() => setOpen(!isOpen)}
				>
					<IconText Icon={GiHamburgerMenu}>Menu</IconText>

					{currentLink && <IconText Icon={currentLink.Icon}>{currentLink.label}</IconText>}
				</Button>
				{isOpen && (
					<Flex bb="2px solid black">
						<ButtonColumn br="2px solid black">
							{internalLinks.map(({ to, Icon, label }) => (
								<NavButton key={to} to={to} Icon={Icon}>
									{label}
								</NavButton>
							))}
						</ButtonColumn>
						<ButtonColumn>
							{externalLinks.map(({ to, Icon, label }) => (
								<NavButton key={to} newTab to={to} Icon={Icon}>
									{label}
								</NavButton>
							))}
						</ButtonColumn>
					</Flex>
				)}
			</Box>
		</NavContext.Provider>
	);
};
