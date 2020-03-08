import React from 'react';
import Router from '../Router';
import { Box } from 'primitives';

const { Link } = Router;

const Tab = ({ children, value, isActive, onClick }) => (
	<Link
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
		onClick={onClick}
		to={`/${value}`}
	>
		{children}
	</Link>
);

export const Tabs = ({ onChange, options, value, ...props }) => {
	return (
		<Box {...props}>
			{options.map(option => (
				<Tab
					key={option.value}
					value={option.value}
					isActive={option.value === value}
					onClick={() => onChange(option.value)}
				>
					{option.label}
				</Tab>
			))}
		</Box>
	);
};
