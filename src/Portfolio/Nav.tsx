import React from 'react';
import { Box, Flex, Text } from '../core/primitives';
import { space } from '../core/tokens';
import { PageLink } from '../Router/NewRouter3';
import { routes } from './routes';

const SocialLink = ({ name, url }) => (
	<Text.BodyMedium as="a" href={url} textAlign="right" pr={space._3} color={null} display="block">
		{name}
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
				{routes.map((s) => {
					const isActive = s.id === value;
					return (
						<PageLink
							key={s.id}
							as={Text.BodyMedium}
							borderRight={isActive && '2px solid black'}
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
				<Box pt={space._4}>
					<SocialLink key="ig" name="Instagram" url="https://www.instagram.com/gregolai/" />
					<SocialLink key="li" name="LinkedIn" url="https://www.linkedin.com/in/gregolai/" />
				</Box>
			</Gradient>
		</Flex>
	);
};
