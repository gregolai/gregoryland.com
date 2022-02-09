import React from 'react';
import { Box } from 'pu2/style-lib';
import { To, Link, useLocation, useNavigate } from 'react-router-dom';
import { FontSize, MediaQ, Palette, Space } from './theme';
import {
	AnchorButton,
	AnchorButtonNewTab,
	Button,
	ExternalLinkButton,
	Flex,
	H1,
	InternalLinkButton,
	Text
} from './primitives';
import { Links } from './Links';
import type { IconType } from 'react-icons';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

export const Header = () => {
	return (
		<Flex
			as="header"
			bg="#f7f2e9"
			border="2px solid black"
			justifyContent="space-between"
			alignItems="center"
			css={{
				[MediaQ.smallScreen]: {
					flexDirection: 'column',
					'>h1': {
						pb: Space._4
					}
				}
			}}
		>
			{/* <Links hideImg includeHome={!isRoot} /> */}

			<H1 flex="1">Gregory Dalton</H1>
		</Flex>
	);
};
