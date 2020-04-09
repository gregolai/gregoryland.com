import React from 'react';
//import Router from '../Router';
import { Box, Text } from 'core/primitives';

import { PageLink } from '../Router/NewRouter';
import { space } from 'core/tokens';
//const { Link } = Router;

const Tabs = ({ css, options, value }) => {
	return (
		<Box
			css={{
				position: 'relative',
				...css
			}}
		>
			<Box
				css={{
					position: 'absolute',
					top: '0px',
					right: '0px',
					width: '2px',
					height: '100%',
					background: 'linear-gradient(transparent, black, transparent)'
				}}
			/>
			{options.map(option => {
				const isActive = option.value === value;
				return (
					<PageLink
						key={option.value}
						as={Text.Subtitle}
						css={{
							cursor: 'pointer',
							outline: 'none',
							display: 'block',
							width: '120px',
							py: space._1,
							px: space._2,
							fontSize: '12px',
							color: 'black',
							textAlign: 'right',
							textDecoration: 'none',
							':focus': {
								textDecoration: 'underline'
							},
							':hover': {
								textDecoration: 'underline'
							}
						}}
						pathname={option.value}
					>
						{option.label}
					</PageLink>
				);
			})}
		</Box>
	);
};
export default Tabs;
