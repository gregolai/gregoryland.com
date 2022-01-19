import React from 'react';
import { Box, Flex, Text } from '../core/primitives';
import { space } from '../core/tokens';
import { PageLink } from '../Router/NewRouter3';
import { routes } from './routes';

const SocialLink = ({ children, ...props }) => (
	<Text.BodyMedium as="a" textAlign="right" pr={space._3} color={null} display="block" {...props}>
		{children}
	</Text.BodyMedium>
);

const Gradient = ({ children, color }) => (
	<>
		<Box flex="1" background={`linear-gradient(transparent, ${color})`} />
		<Box background={color}>{children}</Box>
		<Box flex="1" background={`linear-gradient(${color}, transparent)`} />
	</>
);

export const NAV_WIDTH = '160px';

export const Nav = ({ currentScreen }) => {
	const value = currentScreen?.id;

	return (
		<Flex flexDirection="column" position="fixed" left="0px" top="0px" height="100%" width={NAV_WIDTH}>
			<Gradient color="rgba(255,255,255,0.95)">
				<Box>
					{routes.map((s) => {
						const isActive = s.id === value;
						return (
							<PageLink
								key={s.id}
								as={Text.BodyMedium}
								borderRight={`2px solid ${isActive ? 'black' : 'transparent'}`}
								justifyContent="flex-end"
								py={space._1}
								pl={space._5}
								pr={space._3}
								textDecoration="none"
								css={{
									':focus': {
										textDecoration: 'underline'
									},
									':hover': {
										textDecoration: 'underline'
									}
								}}
								to={s.path}
							>
								{s.label}
							</PageLink>
						);
					})}
				</Box>
				<Box pt={space._4}>
					<SocialLink
						href="https://www.instagram.com/gregolai/"
						title="I'm pretty open with posting pics of my life."
					>
						Instagram
					</SocialLink>
					<SocialLink
						href="https://www.linkedin.com/in/gregolai/"
						title="I don't update this as often as I should."
					>
						LinkedIn
					</SocialLink>
					<SocialLink
						href="https://github.com/gregolai"
						title="I don't contribute as often as I should."
					>
						GitHub
					</SocialLink>
				</Box>
			</Gradient>
		</Flex>
	);
};
