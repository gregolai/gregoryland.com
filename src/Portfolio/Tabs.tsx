import React from 'react';
//import Router from '../Router';
import { Box, Text } from 'primitives';

import { PageLink } from '../Router/router_3rd_party/NewRouter';
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
				padding: '4px 8px',
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
			pathname={`/${value}`}
		>
			{children}
		</PageLink>
	);
};

export const Tabs = ({ options, value, ...props }) => {
	return (
		<Box {...props}>
			{options.map(option => (
				<Tab
					key={option.value}
					value={option.value}
					isActive={option.value === value}
					//onClick={() => onChange(option.value)}
				>
					{option.label}
				</Tab>
			))}
		</Box>
	);
};
