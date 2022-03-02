import React from 'react';
import { Box } from 'pu2/style-lib';
import { Link } from 'react-router-dom';
import { Flex, H3 } from './primitives';
import { Breakpoint, mediaLessThan, Space } from './theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

const links = [
	{
		imgSrc: 'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		text: 'Career',
		to: '/career'
	},
	{
		imgSrc: 'https://images.unsplash.com/photo-1642420805144-5f03e55f90a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		text: 'Projects',
		to: '/projects'
	},
	{
		imgSrc: 'https://images.unsplash.com/photo-1642437386648-2521ba6f908b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1445&q=80',
		text: 'Life',
		to: '/life'
	}
];

export const Links = ({ ...rest }: BoxProps) => {
	return (
		<Flex {...rest}>
			{links.map(({ to, imgSrc, text }) => (
				<Box
					key={to}
					as={Link}
					to={to}
					flex="1"
					textDecoration="none"
					css={{
						':hover': {
							' img': {
								transform: 'scale(1.05)'
							},
							' h3': {
								background: 'black',
								color: 'white'
							}
						}
					}}
				>
					<Box height="160px" bb="2px solid black" overflow="hidden">
						<Box
							as="img"
							src={imgSrc}
							objectFit="cover"
							objectPosition="50% 50%"
							width="100%"
							height="100%"
							transition="transform 0.2s ease-in-out"
						/>
					</Box>
					<H3
						whiteSpace="nowrap"
						py={Space._3}
						px={Space._7}
						css={{
							background: 'white',
							color: 'black',

							[mediaLessThan(Breakpoint.smallScreen)]: {
								px: '0px',
								textAlign: 'center'
							}
						}}
					>
						{text}
					</H3>
				</Box>
			))}
		</Flex>
	);
};
