import React from 'react';
//import Router from '../Router';
import { Box, Text } from 'core/primitives';

import { PageLink } from '../Router/NewRouter';
import { space } from 'core/tokens';
//const { Link } = Router;

const Tab = ({ children, value, isActive }) => {
	return (
		<PageLink
			as={Text.Subtitle}
			css={{
				cursor: 'pointer',
				outline: 'none',
				display: 'block',
				width: '120px',
				py: space._1,
				px: space._2,
				fontSize: '12px',
				border: '2px solid black',
				backgroundColor: isActive ? 'white' : 'black',
				color: isActive ? 'black' : 'white',
				textDecoration: 'none',
				':focus': {
					textDecoration: 'underline'
				},
				':hover': {
					textDecoration: 'underline'
				}
			}}
			pathname={value}
		>
			{children}
		</PageLink>
	);
};

export const Tabs = ({ css, options, value }) => {
	return (
		<Box css={css}>
			{options.map(option => (
				<Tab key={option.value} value={option.value} isActive={option.value === value}>
					{option.label}
				</Tab>
			))}
		</Box>
	);
};
