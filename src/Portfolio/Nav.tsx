import React from 'react';
import { Box, Text } from 'core/primitives';
import { space } from 'core/tokens';
import { PageLink } from '../Router/NewRouter';

const Nav = ({ currentScreen, screens }) => {
	const options = screens.map(({ id, link }) => ({
		label: link.label,
		pathname: link.pathname,
		value: id
	}));
	const value = currentScreen?.id;

	const color = 'rgba(255,255,255,0.95)';

	return (
		<Box
			css={{
				position: 'fixed',
				left: '0px',
				top: '0px',
				height: '100%',
				width: '160px',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box
				css={{
					flex: '1',
					background: `linear-gradient(transparent, ${color})`
				}}
			/>
			<Box
				css={{
					position: 'relative',
					background: color
				}}
			>
				{options.map((option) => {
					const isActive = option.value === value;
					return (
						<PageLink
							key={option.value}
							as={Text.Subtitle}
							css={{
								cursor: 'pointer',
								outline: 'none',
								display: 'block',
								py: space._1,
								pl: space._5,
								pr: space._3,
								fontSize: '12px',
								color: 'black',
								borderRight: isActive && '2px solid black',
								textAlign: 'right',
								textDecoration: 'none',
								':focus': {
									textDecoration: 'underline'
								},
								':hover': {
									textDecoration: 'underline'
								}
							}}
							pathname={option.pathname}
						>
							{option.label}
						</PageLink>
					);
				})}
			</Box>
			<Box
				css={{
					flex: '1',
					background: `linear-gradient(${color}, transparent)`
				}}
			/>
		</Box>
	);
};

export default Nav;
