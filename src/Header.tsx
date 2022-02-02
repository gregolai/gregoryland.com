import React from 'react';
import { Box } from 'pu2/style-lib';
import { useLocation, useNavigate } from 'react-router-dom';
import { MediaQ, Space } from './theme';
import { Button, Flex, H1 } from './primitives';
import { Links } from './Links';

export const Header = () => {
	const loc = useLocation();

	const isRoot = loc.pathname === '/';

	return (
		<Flex
			as="header"
			bg="#f7f2e9"
			border="2px solid black"
			py={Space._6}
			px={Space._9}
			justifyContent="space-between"
			alignItems="center"
			css={{
				[MediaQ.phone]: {
					flexDirection: 'column',
					'>h1': {
						pb: Space._4
					}
				}
			}}
		>
			<H1 textAlign="center">Gregory Dalton</H1>

			<Links hideImg includeHome={!isRoot} />
		</Flex>
	);
};
