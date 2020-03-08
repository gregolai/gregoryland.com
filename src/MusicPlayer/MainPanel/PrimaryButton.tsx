import React from 'react';
import { Button, Flex } from 'primitives';

export const PrimaryButton: React.FC<any> = ({ children, css, onClick, size }) => {
	const small = size === 'small';
	return (
		<Button
			css={{
				borderRadius: '50%',
				background: 'linear-gradient(155deg, #EBF0FA 0%, #B5CCE3 100%)',
				boxShadow: '1px 1px 0px 0px inset rgba(0,0,0,0.1)',
				width: small ? '32px' : '56px',
				height: small ? '32px' : '56px',
				...css
			}}
			onClick={onClick}
		>
			<Flex
				css={{
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '50%',
					boxShadow: '0 0 4px 0px rgba(0,0,0,0.4), 0px 1px rgba(0,0,0,0.2)',
					background: 'radial-gradient(circle at 70% 100%, #F5F3F7 14%, #D3DFED 74%, #F5F3F7 88%)',
					width: small ? '24px' : '46px',
					height: small ? '24px' : '46px'
				}}
			>
				{children}
			</Flex>
		</Button>
	);
};
